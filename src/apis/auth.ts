import axios from 'axios'
import { TAxiosResponse } from 'src/interfaces'
import { ICredential, IProfile } from 'src/interfaces/models/auth.model'

export class AuthApi {
  static signIn(payload: {
    email: string
    password: string
  }): TAxiosResponse<ICredential> {
    return axios.post('/login', payload)
  }

  static signUp(payload: any): TAxiosResponse<void> {
    return axios.post('/affiliates/signup', payload)
  }

  static logout(): TAxiosResponse<void> {
    return axios.delete('/logout')
  }

  static profile(): TAxiosResponse<{ profile: IProfile }> {
    return axios.get('/v1/profile')
  }

  static editProfile(payload: any): TAxiosResponse<void> {
    return axios.put('/v1/profile', payload)
  }
}
