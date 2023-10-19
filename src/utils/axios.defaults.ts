import axios, { AxiosError } from 'axios'

export const networkInterceptor: Parameters<
  typeof axios.interceptors.request.use
>[0] = (config) => {
  /* Prevent call API when offline */
  if (navigator?.onLine === false) {
    throw new AxiosError(
      'Please check your network connection.',
      'Network Error',
      config
    )
  }

  return config
}

/**
 * axios config
 */
if (import.meta.env.VITE_APP_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL
}

/**
 * axios interceptors
 */
axios.interceptors.request.use(networkInterceptor)
