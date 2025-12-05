/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_BASE_URL: string;
  readonly PUBLIC_TENANT_SLUG: string;
  readonly PUBLIC_SITE_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
