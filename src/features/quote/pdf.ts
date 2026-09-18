import type { TDocumentDefinitions, Content } from 'pdfmake/interfaces';
import { calculateQuote, money } from './pricing.mjs';
import { quoteCopy } from './copy';
import { site } from '../../config/site';
import type { Lang } from '../../lib/i18n';
export type Client = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  location: string;
  comments: string;
};
export function buildDocument(
  client: Client,
  selection: Record<string, boolean>,
  lang: Lang,
  reference: string,
  date = new Date(),
): TDocumentDefinitions {
  const c = quoteCopy[lang];
  const q = calculateQuote(selection);
  const labels: Record<string, string> = { ...c.labels, hosting: c.hosting };
  const table = (
    items: { key: string; price: number }[],
    totals: { subtotal: number; tax: number; total: number },
  ): Content => ({
    layout: 'lightHorizontalLines',
    margin: [0, 8, 0, 18],
    table: {
      headerRows: 1,
      widths: ['*', 130],
      body: [
        [
          { text: c.details, bold: true },
          { text: 'MXN', bold: true, alignment: 'right' },
        ],
        ...items.map((i) => [
          labels[i.key],
          { text: money(i.price, lang), alignment: 'right' as const },
        ]),
        [
          c.subtotal,
          { text: money(totals.subtotal, lang), alignment: 'right' },
        ],
        [c.tax, { text: money(totals.tax, lang), alignment: 'right' }],
        [
          { text: c.total, bold: true, fillColor: '#eef2ff' },
          {
            text: money(totals.total, lang),
            bold: true,
            alignment: 'right',
            fillColor: '#eef2ff',
          },
        ],
      ],
    },
  });
  return {
    pageSize: 'LETTER',
    pageMargins: [40, 44, 40, 48],
    info: { title: c.quote, author: site.name },
    defaultStyle: {
      font: 'Roboto',
      fontSize: 10,
      color: '#1e293b',
      lineHeight: 1.25,
    },
    styles: {
      heading: {
        fontSize: 22,
        bold: true,
        color: '#4f46e5',
        margin: [0, 0, 0, 8],
      },
      section: { fontSize: 13, bold: true, margin: [0, 16, 0, 6] },
    },
    footer: (current, total) => ({
      text: `${site.name} · ${site.email}  |  ${current} / ${total}`,
      alignment: 'center',
      fontSize: 8,
      color: '#64748b',
      margin: [0, 16, 0, 0],
    }),
    content: [
      { text: site.name, bold: true, fontSize: 12, margin: [0, 0, 0, 16] },
      { text: c.quote, style: 'heading' },
      {
        text: `${c.reference}: ${reference}   |   ${c.date}: ${date.toLocaleDateString({ es: 'es-MX', en: 'en-US', pt: 'pt-BR' }[lang])}`,
        fontSize: 9,
        color: '#64748b',
      },
      { text: c.client, style: 'section' },
      ...(
        ['fullName', 'companyName', 'email', 'phone', 'location'] as const
      ).map(
        (key) =>
          ({
            text: [{ text: c[key] + ': ', bold: true }, client[key]],
            margin: [0, 0, 0, 4],
          }) as Content,
      ),
      { text: c.project, style: 'section' },
      table(q.items, q.project),
      {
        unbreakable: true,
        stack: [
          { text: c.monthly, style: 'section' },
          table(q.monthlyItems, q.monthly),
        ],
      },
      ...(client.comments.trim()
        ? [{ text: c.comments, style: 'section' }, { text: client.comments }]
        : []),
      { text: c.note, margin: [0, 16, 0, 6], fontSize: 9 },
      { text: `${site.email} · ${site.phone}`, fontSize: 9 },
    ],
  };
}
export async function downloadQuote(
  client: Client,
  selection: Record<string, boolean>,
  lang: Lang,
) {
  const [{ default: pdfMake }, { default: fonts }] = await Promise.all([
    import('pdfmake/build/pdfmake'),
    import('pdfmake/build/vfs_fonts'),
  ]);
  const reference = `MG-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  const document = buildDocument(client, selection, lang, reference);
  // 0.2 uses a callback; await actual blob creation so UI never claims success on a failed PDF.
  const blob = await new Promise<Blob>((resolve, reject) => {
    try {
      pdfMake.createPdf(document, undefined, undefined, fonts).getBlob(resolve);
    } catch (error) {
      reject(error);
    }
  });
  const url = URL.createObjectURL(blob);
  const link = window.document.createElement('a');
  link.href = url;
  link.download = `${reference}.pdf`;
  window.document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}
