import { ICredential, IProfile } from 'src/interfaces/models/auth.model'

/* authentication actions */
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_SET_CREDENTIALS = 'AUTH_SET_CREDENTIALS'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_GET_PROFILE = 'AUTH_GET_PROFILE'
export const AUTH_SET_PROFILE = 'AUTH_SET_PROFILE'

/**
 * state
 */
export interface IAuthState {
  isAuthenticated: boolean | null
  credentials: ICredential
  profile: IProfile | null
}

/**
 * actions
 */
export type TAuthAction = {
  type:
    | typeof AUTH_SET_CREDENTIALS
    | typeof AUTH_LOGOUT_SUCCESS
    | typeof AUTH_GET_PROFILE
    | typeof AUTH_SET_PROFILE
  value?: IProfile | ICredential
}
