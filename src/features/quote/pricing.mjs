// Prices imported from the portable calculator. All amounts are MXN, before VAT.
export const pricing = {
  base: 5000,
  vat: 0.16,
  validityDays: 30,
  features: {
    formLanding: 350,
    about: 750,
    contact: 750,
    contactForm: 350,
    catalog: 2200,
    ecommerce: 8500,
    wishlist: 700,
    coupons: 700,
    reviews: 700,
    portfolio: 2500,
    blog: 2500,
    ai: 2500,
    aiPremium: 800,
  },
  monthly: { hosting: 450, contactForm: 250, aiPremium: 350 },
};
export const featureKeys = Object.keys(pricing.features);
export function normalizeFeatures(input = {}) {
  const state = Object.fromEntries(
    featureKeys.map((key) => [key, input[key] === true]),
  );
  if (!state.contact) state.contactForm = false;
  if (state.ecommerce) state.catalog = true;
  else for (const key of ['wishlist', 'coupons', 'reviews']) state[key] = false;
  if (!state.ai) state.aiPremium = false;
  return state;
}
const withTax = (subtotal) => ({
  subtotal,
  tax: Math.round(subtotal * pricing.vat * 100) / 100,
  total: Math.round(subtotal * (1 + pricing.vat) * 100) / 100,
});
export function calculateQuote(input = {}) {
  const features = normalizeFeatures(input);
  const items = [
    { key: 'landing', price: pricing.base },
    ...featureKeys
      .filter(
        (key) => features[key] && !(key === 'catalog' && features.ecommerce),
      )
      .map((key) => ({ key, price: pricing.features[key] })),
  ];
  const monthlyItems = [
    { key: 'hosting', price: pricing.monthly.hosting },
    ...['contactForm', 'aiPremium']
      .filter((key) => features[key])
      .map((key) => ({ key, price: pricing.monthly[key] })),
  ];
  return {
    features,
    items,
    monthlyItems,
    project: withTax(items.reduce((n, i) => n + i.price, 0)),
    monthly: withTax(monthlyItems.reduce((n, i) => n + i.price, 0)),
  };
}
export function money(amount, lang = 'es') {
  return new Intl.NumberFormat(
    { es: 'es-MX', en: 'en-US', pt: 'pt-BR' }[lang],
    { style: 'currency', currency: 'MXN', currencyDisplay: 'code' },
  ).format(amount);
}
