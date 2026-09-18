export const budgets = [
  '5000-10000',
  '10000-15000',
  '15000-20000',
  '20000-25000',
  '25000+',
];
const limits = {
  fullName: 120,
  whatsapp: 40,
  email: 254,
  companyName: 150,
  description: 3000,
  budget: 30,
  website: 200,
  lang: 2,
  consent: 3,
};
export function validateRequest(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const data = {};
  for (const [key, max] of Object.entries(limits)) {
    const value = input[key] ?? '';
    if (typeof value !== 'string' || value.length > max) return null;
    data[key] = value.trim();
  }
  if (
    data.fullName.length < 2 ||
    data.description.length < 20 ||
    !/^[+()\d .-]{7,40}$/.test(data.whatsapp) ||
    data.whatsapp.replace(/\D/g, '').length < 7 ||
    !budgets.includes(data.budget) ||
    data.consent !== 'yes'
  )
    return null;
  if (data.email && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email))
    return null;
  if (!['es', 'en', 'pt'].includes(data.lang)) data.lang = 'es';
  return data;
}
export const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        ch
      ],
  );
export function composeEmail(data, from, to) {
  const labels = {
    fullName: 'Nombre',
    whatsapp: 'WhatsApp',
    email: 'Correo',
    companyName: 'Empresa',
    description: 'Proyecto',
    budget: 'Presupuesto MXN',
    lang: 'Idioma',
  };
  return {
    from,
    to,
    subject: 'Nueva solicitud de proyecto — Marcos GZZ',
    ...(data.email ? { replyTo: data.email } : {}),
    text: Object.entries(labels)
      .map(([key, label]) => `${label}: ${data[key]}`)
      .join('\n\n'),
    html:
      '<h1>Nueva solicitud de proyecto</h1>' +
      Object.entries(labels)
        .map(
          ([key, label]) =>
            `<p><strong>${label}</strong><br>${escapeHtml(data[key]).replaceAll('\n', '<br>')}</p>`,
        )
        .join(''),
  };
}
// Best-effort per-instance protection; configure shared rate limits in Vercel WAF for production traffic.
export function createLimiter(max = 5, windowMs = 600000) {
  const hits = new Map();
  return (key, now = Date.now()) => {
    for (const [id, entry] of hits) if (entry.until <= now) hits.delete(id);
    if (!hits.has(key)) {
      if (hits.size >= 10000) return false;
      hits.set(key, { count: 0, until: now + windowMs });
    }
    const entry = hits.get(key);
    return ++entry.count <= max;
  };
}
export const allowRequest = createLimiter();
export async function handleQuote(
  request,
  { env, send, ip = 'unknown', allow = allowRequest },
) {
  const json = (status, body) =>
    new Response(JSON.stringify(body), {
      status,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        ...(status === 429 ? { 'Retry-After': '600' } : {}),
      },
    });
  if (request.method !== 'POST') return json(405, { success: false });
  if (request.headers.get('origin') !== new URL(request.url).origin)
    return json(403, { success: false });
  if (
    !request.headers
      .get('content-type')
      ?.toLowerCase()
      .startsWith('application/json')
  )
    return json(415, { success: false });
  if (!allow(ip)) return json(429, { success: false });
  // Bound the actual stream too; Content-Length is untrusted and may be absent.
  let raw = '';
  let size = 0;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json(400, { success: false });
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16000) {
        await reader.cancel();
        return json(413, { success: false });
      }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
  } catch {
    return json(400, { success: false });
  }
  let data;
  try {
    data = validateRequest(JSON.parse(raw));
  } catch {
    return json(400, { success: false });
  }
  if (!data) return json(400, { success: false });
  if (data.website) return json(400, { success: false });
  if (
    !env.BREVO_SMTP_USER ||
    !env.BREVO_SMTP_PASS ||
    !env.QUOTE_MAIL_FROM ||
    !env.QUOTE_MAIL_TO
  )
    return json(503, { success: false });
  try {
    await send(composeEmail(data, env.QUOTE_MAIL_FROM, env.QUOTE_MAIL_TO));
    return json(200, { success: true });
  } catch {
    return json(502, { success: false });
  }
}
