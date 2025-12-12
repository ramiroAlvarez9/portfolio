import type { Plugin } from "vite";

export function deferCssPlugin(): Plugin {
  return {
    name: "defer-css",
    transformIndexHtml(html: string): string {
      const cssLinkRegex = /<link rel="stylesheet"(.*?)href="([^"]+\.css)"(.*?)>/;
      const match = html.match(cssLinkRegex);

      if (match) {
        const fullMatch = match[0];
        const preHref = match[1];
        const href = match[2];
        const postHref = match[3];

        const newLink = `<link rel="stylesheet"${preHref}href="${href}"${postHref} media="print" onload="this.media='all'">`;
        const noscriptFallback = `<noscript><link rel="stylesheet"${preHref}href="${href}"${postHref}></noscript>`;

        return html.replace(fullMatch, `${newLink}${noscriptFallback}`);
      }

      return html;
    },
  };
}
