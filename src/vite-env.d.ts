/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV_FILE: string;
  readonly VITE_BASE_URL: string;

  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_DATABASE_URL: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MSG_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
