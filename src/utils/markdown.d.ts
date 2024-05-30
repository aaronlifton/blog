// Usage// Register nodes in content.
declare module "mdast" {

  interface Data {
    lang: string;
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface RootContentMap {
    /**
     * Raw string of HTML embedded into HTML AST.
     */
    lang: string;
    value: string;
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface ElementContentMap {
    /**
     * Raw string of HTML embedded into HTML AST.
     */
    raw: string;
    value: string;
  }
}
