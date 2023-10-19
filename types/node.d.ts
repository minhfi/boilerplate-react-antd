declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly PORT: string
    readonly VITE_APP_API_BASE_URL: string
    readonly [key: string]: string
  }
}
