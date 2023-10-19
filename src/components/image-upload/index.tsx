import { ChangeEvent, FC, useRef, useState } from 'react'
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons'
import { IMAGE_EXTENSIONS } from 'src/constants'
import { EShapeImage, Image } from '../image'
import './style.scss'

interface IImageUploadProps {
  size?: number
  src?: string
  shape?: EShapeImage
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onRemove?: () => void
}

export const ImageUpload: FC<IImageUploadProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isOverlay, setIsOverlay] = useState(false)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      props.onChange && props.onChange(event)
    }

    if (inputRef.current?.value) {
      inputRef.current.value = ''
    }
  }

  const handleUpload = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleRemove = () => props.onRemove && props.onRemove()

  return (
    <div
      className="image-upload"
      onMouseEnter={() => setIsOverlay(true)}
      onMouseLeave={() => setIsOverlay(false)}
    >
      <Image size={props.size} src={props.src} shape={props.shape}>
        {props.children}
      </Image>

      {isOverlay && (
        <div
          className="image-upload__overlay" style={{
            borderRadius: props.shape === EShapeImage.SQUARE ? 'unset' : '50%'
          }}
        >
          {props.src
            ? (
              <div
                className="image-upload__overlay--delete"
                onClick={handleRemove}
              >
                <DeleteOutlined/>
              </div>
              )
            : (
              <div
                className="image-upload__overlay--upload"
                onClick={handleUpload}
              >
                <UploadOutlined/>
              </div>
              )}
        </div>
      )}

      <input
        type="file"
        ref={inputRef}
        accept={IMAGE_EXTENSIONS}
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}

ImageUpload.defaultProps = {
  size: 100,
  shape: EShapeImage.SQUARE
}
