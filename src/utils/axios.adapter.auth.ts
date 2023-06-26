import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AuthenticationUtil } from 'src/utils/authentication.util'
import { AuthApi } from 'src/apis'
import { store } from 'src/store'
import { AUTH_LOGOUT_SUCCESS } from 'src/store/types'

/**
 * @typedef {import('axios').AxiosRequestConfig} AxiosRequestConfig
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

const clearCredentials = () => {
  AuthenticationUtil.clear()
  store.dispatch({ type: AUTH_LOGOUT_SUCCESS })
}

/**
 * @param {AxiosRequestConfig} config
 * @returns {AxiosRequestConfig}
 */
const injectAuthorization = (config: AxiosRequestConfig) => {
  const token = AuthenticationUtil.getToken()

  if ((token) && config.headers) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
}

/**
 * @param {AxiosResponse} response
 */
const cacheResponseToken = (response: AxiosResponse) => {
  const { data } = (response as Awaited<ReturnType<typeof AuthApi.login>>).data || {}

  if (data?.accessToken) {
    AuthenticationUtil.setToken(data?.accessToken)
  }

  return response
}

const handleErrorResponse = (error: AxiosError) => {
  if (error.response && error.response.status === 403) {
    clearCredentials()
  }

  throw error
}

/**
 * Custom axios adapter
 */
const defaultAdapter = axios.defaults.adapter
axios.defaults.adapter = async function (config) {
  injectAuthorization(config)

  return axios
    .create(Object.assign(config, { adapter: defaultAdapter }))
    .request(config)
    .then(response => cacheResponseToken(response))
    .catch(handleErrorResponse)
}
