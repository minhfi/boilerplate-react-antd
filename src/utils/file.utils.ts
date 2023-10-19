export const readFilePromise = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function (e: ProgressEvent<FileReader>) {
      resolve(e.target?.result)
    }

    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file)
    }
  })

export const downloadFile = async (url: string) => {
  // if (type === 'auth') {
  //   const response = await axios({
  //     url,
  //     method: 'GET',
  //     responseType: 'blob'
  //   })

  //   const urlParse = window.URL.createObjectURL(new Blob([response.data]))
  //   const pathname: string[] = response.config?.url?.split('/') || []
  //   const link = document.createElement('a')
  //   link.href = urlParse
  //   link.setAttribute('download', pathname[pathname.length - 1])
  //   document.body.appendChild(link)
  //   return link.click()
  // }

  const link = document.createElement('a')
  link.setAttribute('target', '_blank')
  link.setAttribute('href', url)
  link.setAttribute('download', '')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
