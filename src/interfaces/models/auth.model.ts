export interface ICredential {
  credentials: {
    token: string
    refreshToken: string
    role: string
  }
}

export interface IProfile {
  id: number | string
  imageUrl?: string
  firstName: string
  lastName: string
  email?: string
  showEmailForUsers?: boolean
  twoFactorAuthEnabled?: boolean
  phone?: string | number
  timezone?: any
  apiKey?: string
  apiKeyStatus?: boolean
  balance?: string | number
  status?: string
  role: {
    name: string
    code: string
  }
}
