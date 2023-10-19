import axios from 'axios'
import { IUploadPreSigned, TAxiosResponse } from 'src/interfaces'

export class UploadApi {
  static presigned(
    payload: {
      fileName: string
      contentType: string
    }
  ): TAxiosResponse<IUploadPreSigned> {
    return axios.post('/v1/files/upload-urls', payload)
  }
}
