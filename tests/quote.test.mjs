import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateQuote,
  normalizeFeatures,
} from '../src/features/quote/pricing.mjs';
import {
  validateRequest,
  composeEmail,
  createLimiter,
  handleQuote,
} from '../src/features/quote/server.mjs';

test('base and ecommerce quotes preserve source pricing without double-counting catalog', () => {
  assert.deepEqual(calculateQuote().project, {
    subtotal: 5000,
    tax: 800,
    total: 5800,
  });
  assert.deepEqual(calculateQuote().monthly, {
    subtotal: 450,
    tax: 72,
    total: 522,
  });
  const ecommerce = calculateQuote({ ecommerce: true, catalog: true });
  assert.deepEqual(ecommerce.project, {
    subtotal: 13500,
    tax: 2160,
    total: 15660,
  });
  assert.equal(ecommerce.items.filter((i) => i.key === 'catalog').length, 0);
  assert.equal(calculateQuote({ catalog: true }).project.subtotal, 7200);
});
test('dependencies reset child options and monthly charges', () => {
  const invalid = normalizeFeatures({
    contactForm: true,
    wishlist: true,
    coupons: true,
    reviews: true,
    aiPremium: true,
  });
  for (const key of [
    'contactForm',
    'wishlist',
    'coupons',
    'reviews',
    'aiPremium',
  ])
    assert.equal(invalid[key], false);
  assert.equal(normalizeFeatures({ ecommerce: true }).catalog, true);
  const full = calculateQuote({
    contact: true,
    contactForm: true,
    ai: true,
    aiPremium: true,
  });
  assert.equal(full.monthly.subtotal, 1050);
  assert.equal(full.monthly.total, 1218);
  assert.equal(calculateQuote({ formLanding: true }).monthly.subtotal, 450);
  assert.equal(
    calculateQuote({
      contact: false,
      contactForm: true,
      ai: false,
      aiPremium: true,
    }).monthly.subtotal,
    450,
  );
});
const data = {
  fullName: 'Test Client',
  whatsapp: '+52 777 123 4567',
  email: 'test@example.com',
  companyName: 'Demo',
  description: 'A website for a fictional business.',
  budget: '5000-10000',
  lang: 'en',
  consent: 'yes',
};
const env = {
  BREVO_SMTP_USER: 'test',
  BREVO_SMTP_PASS: 'test',
  QUOTE_MAIL_FROM: 'from@example.com',
  QUOTE_MAIL_TO: 'to@example.com',
};
const request = (value = data, headers = {}) =>
  new Request('https://example.com/api/send-email', {
    method: 'POST',
    headers: {
      origin: 'https://example.com',
      'content-type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(value),
  });
test('validation rejects invalid contact, missing consent, excessive input and bad budgets', () => {
  assert.ok(validateRequest(data));
  for (const change of [
    { email: 'x@invalid' },
    { whatsapp: 'abcdefg' },
    { fullName: ' ' },
    { consent: '' },
    { budget: 'free' },
    { description: 'x'.repeat(3001) },
    { fullName: {} },
  ])
    assert.equal(validateRequest({ ...data, ...change }), null);
});
test('email escapes untrusted HTML and has a plain text version', () => {
  const email = composeEmail(
    validateRequest({
      ...data,
      fullName: '<script>alert(1)</script>',
      description: 'A project with <img onerror="x">',
    }),
    'from',
    'to',
  );
  assert.doesNotMatch(email.html, /<script|<img/);
  assert.match(email.html, /&lt;script&gt;/);
  assert.match(email.text, /<script>/);
  assert.equal(email.replyTo, data.email);
});
test('endpoint sends only validated requests; no success if SMTP fails or is absent', async () => {
  let sent = 0;
  const options = {
    env,
    allow: () => true,
    send: async () => {
      sent++;
    },
  };
  assert.equal((await handleQuote(request(), options)).status, 200);
  assert.equal(sent, 1);
  assert.equal((await handleQuote(request({}, {}), options)).status, 400);
  assert.equal(
    (
      await handleQuote(
        request(data, { origin: 'https://attacker.example' }),
        options,
      )
    ).status,
    403,
  );
  assert.equal(
    (
      await handleQuote(
        request(data, { 'content-type': 'text/plain' }),
        options,
      )
    ).status,
    415,
  );
  assert.equal(
    (await handleQuote(request({ ...data, website: 'spam' }), options)).status,
    400,
  );
  assert.equal(
    (await handleQuote(request(), { ...options, env: {} })).status,
    503,
  );
  assert.equal(
    (
      await handleQuote(request(), {
        ...options,
        send: async () => {
          throw Error('SMTP');
        },
      })
    ).status,
    502,
  );
  assert.equal(
    (await handleQuote(request(), { ...options, allow: () => false })).status,
    429,
  );
  assert.equal(
    (
      await handleQuote(
        request({ ...data, description: 'x'.repeat(17000) }),
        options,
      )
    ).status,
    413,
  );
  assert.equal(sent, 1);
});
test('rate limiter separates clients and resets the window', () => {
  const allow = createLimiter(2, 1000);
  assert.equal(allow('a', 0), true);
  assert.equal(allow('a', 1), true);
  assert.equal(allow('a', 2), false);
  assert.equal(allow('b', 2), true);
  assert.equal(allow('a', 1000), true);
});
