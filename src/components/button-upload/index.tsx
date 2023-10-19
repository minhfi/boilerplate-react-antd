import { ChangeEvent, FC, useRef, useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { IMAGE_EXTENSIONS } from 'src/constants'
import './style.scss'
import { Button } from '../button'
import { Colors } from 'src/constants/theme'

interface IButtonUploadProps {
  label?: string
  required?: boolean
  error?: string
  mb?: string | number
  accept?: string
  src?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onRemove?: () => void
}

export const ButtonUpload: FC<IButtonUploadProps> = (props) => {
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
    <div style={{ marginBottom: props.mb }} className="button-upload">
      {props.label && (
        <div className="body-2 f-medium" style={{ marginBottom: '8px' }}>
          {props.label}{' '}
          {props.required && (
            <span className="body-2" style={{ color: Colors.red }}>
              *
            </span>
          )}
        </div>
      )}

      {!props.src && (
        <div className="fx fx-ai-center gap-8">
          <Button type="default" onClick={handleUpload}>
            {props.children}
          </Button>
          <div className="button-upload__extension">PNG, JPG, GIF</div>
        </div>
      )}

      {props.error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.red }}>
            {props.error}
          </div>
        </div>
      )}

      {props.src && (
        <div
          className="button-upload__image"
          onMouseEnter={() => setIsOverlay(true)}
          onMouseLeave={() => setIsOverlay(false)}
        >
          <img src={props.src} alt="thumbnail"/>

          {isOverlay && (
            <div
              className="button-upload__overlay"
            >
              <div
                className="button-upload__overlay--delete"
                onClick={handleRemove}
              >
                <DeleteOutlined/>
              </div>
            </div>
          )}
        </div>
      )}

      <input
        type="file"
        ref={inputRef}
        accept={props.accept}
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </div>
  )
}

ButtonUpload.defaultProps = {
  mb: '16px',
  accept: IMAGE_EXTENSIONS
}
