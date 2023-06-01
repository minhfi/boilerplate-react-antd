import { AxiosError } from 'axios'
import { AuthApi, ProfileApi } from 'src/apis'
import { takeLatest, put } from 'redux-saga/effects'
import { AuthenticationUtil } from 'src/utils/authentication.util'
import { convertErrorAPI } from 'src/utils/helpers.utils'
import { StorageUtil } from 'src/utils/storage.util'
import { IErrorResponse } from 'src/interfaces'
import { ENotify } from './../../constants/enum'

import {
  AUTH_LOGIN,
  AUTH_SET_CREDENTIALS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  LAYOUT_SET_NAVIGATE,
  AUTH_GET_PROFILE,
  AUTH_SET_PROFILE
} from '../types'
import { notify } from 'src/utils/notify.util'

/**
 * Get user credentials with jwt
 */
function * getProfile(action: { type: typeof AUTH_GET_PROFILE }) {
  try {
    // workaround for promise with generator function
    const { data: profile } = yield ProfileApi.detail()

    yield put({
      type: AUTH_SET_PROFILE,
      value: profile
    })
  } catch (error) {
    yield put({ type: AUTH_LOGOUT_SUCCESS })
  }
}

/**
 * Call login with user credentials
 * @param {object} action
 * @return {Redirect} Go home
 */
function * login(action: { type: typeof AUTH_LOGIN; payload: {email: string; password: string} }) {
  try {
    // workaround for promise with generator function
    const { data } = yield AuthApi.login(action.payload)
    StorageUtil.setItem('_tk', data.data?.accessToken)

    yield put({
      type: AUTH_SET_CREDENTIALS,
      value: data.data
    })

    yield put({
      type: LAYOUT_SET_NAVIGATE,
      value: '/home'
    })
  } catch (error) {
    notify({
      type: ENotify.ERROR,
      message: convertErrorAPI(error as AxiosError<IErrorResponse>)
    })
  }
}

/**
 * Logout, redirect to home, clear credentials
 * @return {Redirect} Go home
 */
function * logout(action: { type: typeof AUTH_LOGOUT }) {
  try {
    // yield AuthApi.logout()
    yield put({ type: AUTH_LOGOUT_SUCCESS })
    yield AuthenticationUtil.clear()
  } catch (error) {
    notify({
      type: ENotify.ERROR,
      message: convertErrorAPI(error as AxiosError<IErrorResponse>)
    })
  }
}

export const handler = function * () {
  yield takeLatest(AUTH_LOGIN, login)
  yield takeLatest(AUTH_LOGOUT, logout)
  yield takeLatest(AUTH_GET_PROFILE, getProfile)
}
