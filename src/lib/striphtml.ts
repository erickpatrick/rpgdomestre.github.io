export function stripHtml(html: string) {
  return html.replaceAll(/<[^>]+>/gi, "");
}
