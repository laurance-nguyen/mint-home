namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    POCKETBASE_DOMAIN: string;
    POCKETBASE_ADMIN_USERNAME: string;
    POCKETBASE_ADMIN_PASSWORD: string;
  }
}
