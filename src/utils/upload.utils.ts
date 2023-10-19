import { IUploadPreSigned } from 'src/interfaces'

export const uploadFile = async (
  presignedData: IUploadPreSigned,
  file: File
) => {
  try {
    await fetch(presignedData.signedUrl, {
      method: 'PUT',
      body: file,
      headers: {
        'Content-Type': file.type
      }
    })

    return presignedData.objectUrl
  } catch (error) {
    return false
  }
}
