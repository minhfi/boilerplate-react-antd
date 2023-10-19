import { AuthApi } from 'src/apis'
import { takeLatest, put } from 'redux-saga/effects'
import { AuthenticationUtil } from 'src/utils/authentication.util'
import { getApiErrorMessage } from 'src/utils/axios.utils'
import { StorageUtil } from 'src/utils/storage.util'
import { notify } from 'src/utils/notify.util'
import { ENotify } from './../../constants/enum'

import {
  AUTH_LOGIN,
  AUTH_SET_CREDENTIALS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  LAYOUT_SET_NAVIGATE,
  AUTH_GET_PROFILE,
  AUTH_SET_PROFILE,
  LAYOUT_SET_LOADING
} from '../types'

/**
 * Get user credentials with jwt
 */
function * getProfile(action: { type: typeof AUTH_GET_PROFILE }) {
  try {
    // workaround for promise with generator function
    const { data } = yield AuthApi.profile()

    yield put({
      type: AUTH_SET_PROFILE,
      value: data.profile
    })
  } catch (error) {
    // yield put({ type: AUTH_LOGOUT_SUCCESS })
  }
}

/**
 * Call login with user credentials
 * @param {object} action
 * @return {Redirect} Go home
 */
function * login(action: {
  type: typeof AUTH_LOGIN
  payload: { email: string; password: string }
}) {
  try {
    yield put({
      type: LAYOUT_SET_LOADING,
      value: true
    })

    // workaround for promise with generator function
    const { data } = yield AuthApi.signIn(action.payload)
    StorageUtil.setItem('_tk', data.credentials?.token)

    yield put({
      type: AUTH_SET_CREDENTIALS,
      value: data.credentials
    })

    yield put({
      type: LAYOUT_SET_NAVIGATE,
      value: 'dashboard'
    })
  } catch (error) {
    notify({
      type: ENotify.ERROR,
      message: getApiErrorMessage(error)
    })
  } finally {
    yield put({
      type: LAYOUT_SET_LOADING,
      value: false
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
    yield put({
      type: LAYOUT_SET_NAVIGATE,
      value: '/'
    })
  } catch (error) {
    notify({
      type: ENotify.ERROR,
      message: getApiErrorMessage(error)
    })
  }
}

export const handler = function * () {
  yield takeLatest(AUTH_LOGIN, login)
  yield takeLatest(AUTH_LOGOUT, logout)
  yield takeLatest(AUTH_GET_PROFILE, getProfile)
}
