import type { ShikiConfig } from '../node_modules/astro/node_modules/@astrojs/markdown-remark/dist/types.js'
export interface ShikiHighlighter {
    highlight(code: string, lang?: string, options?: {
        inline?: boolean;
        attributes?: Record<string, string>;
    }): string;
}
export declare function createShikiHighlighter({ langs, theme, themes, wrap, transformers, }?: ShikiConfig): Promise<ShikiHighlighter>;
