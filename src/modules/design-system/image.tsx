import { ChangeEvent, FC, useState } from 'react'
import { EShapeImage, Image } from 'src/components/image'
import { ImageUpload } from 'src/components/image-upload'
import { Button } from 'src/components/button'
import { readFilePromise } from 'src/utils/file.utils'

export const ImageUI: FC = () => {
  const [formData, setFormData] = useState<any>({
    file: null,
    src: ''
  })

  const handleRemove = () => {
    setFormData({ file: null, src: '' })
  }

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      const src = await readFilePromise(file)
      setFormData({ file, src })
    }
  }

  const handleSubmit = () => {
    console.log({ formData })

    if (formData?.file) {
      const formFile = new FormData()
      formFile.append('avatar', formData.avatar?.file)

      // call api upload file
    }
  }

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="heading-5">Image</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div
        style={{
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '24px'
        }}
      >
        <Image/>
        <Image size={32}/>
        <Image shape={EShapeImage.CIRCLE}/>
        <ImageUpload
          src={formData.src}
          onChange={handleUpload}
          onRemove={handleRemove}
        />
        <ImageUpload
          shape={EShapeImage.CIRCLE}
          src={formData.src}
          onChange={handleUpload}
          onRemove={handleRemove}
        />
      </div>
    </div>
  )
}
