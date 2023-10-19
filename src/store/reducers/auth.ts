import { ICredential } from 'src/interfaces/models/auth.model'
import { AUTH_LOGOUT_SUCCESS, AUTH_SET_CREDENTIALS, AUTH_SET_PROFILE, IAuthState, TAuthAction } from '../types'

export const initState: IAuthState = {
  isAuthenticated: null,
  credentials: {} as ICredential,
  profile: null
}

export const reducer = (state = initState, action: TAuthAction) => {
  switch (action.type) {
    case AUTH_SET_CREDENTIALS:
      return {
        ...state,
        isAuthenticated: true,
        credentials: action.value
      }
    case AUTH_SET_PROFILE:
      return {
        ...state,
        profile: action.value
      }
    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        credentials: {},
        profile: null
      }

    default:
      return state
  }
}
