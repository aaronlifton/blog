/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TURSO_DB_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
