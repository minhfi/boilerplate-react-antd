export type TKeyField = 'key' | 'bucket' | 'X-Amz-Algorithm' | 'X-Amz-Credential' | 'X-Amz-Date' | 'Policy' | 'X-Amz-Signature'

export interface IUploadPreSigned {
  objectUrl: string
  signedUrl: string
}
