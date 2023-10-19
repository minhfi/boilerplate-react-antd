import { ChangeEvent, FC, ReactElement, useRef } from 'react'
import { truncate } from 'src/utils/helpers.utils'
import { FILE_EXTENSIONS } from 'src/constants'
import { Colors } from 'src/constants/theme'
import { Button } from '../button'
import './style.scss'
import { Popover } from '../popover'
import { InfoCircleOutlined } from '@ant-design/icons'

interface ISelectFileProps {
  label?: string
  required?: boolean
  note?: string
  error?: string | File | null
  mb?: string | number
  width?: string | number
  disabled?: boolean
  name?: string
  accept?: string
  popoverContent?: string | ReactElement
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SelectFile: FC<ISelectFileProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      props.onChange && props.onChange(event)
    }

    if (inputRef.current?.value) {
      inputRef.current.value = ''
    }
  }

  const handleSelectFile = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div className="select-file" style={{ marginBottom: props.mb }}>
      {props.label && (
        <div className="fx fx-ai-center gap-4 body-2 f-medium mb-8">
          <div>{props.label}</div>
          {props.required && <div style={{ color: Colors.red }}>*</div>}
          {props.popoverContent && (
            <Popover content={props.popoverContent}>
              <InfoCircleOutlined
                style={{ color: Colors.gray550 }}
                className="cursor-help"
              />
            </Popover>
          )}
        </div>
      )}

      <div className="fx fx-ai-center gap-8">
        <Button
          type="default"
          disabled={props.disabled}
          onClick={handleSelectFile}
        >
          {props.children}
        </Button>
        {props.name && (
          <div className="select-file__name">{truncate(props.name, 40)}</div>
        )}
      </div>

      {props.note && (
        <div className="meta mt-4" style={{ color: Colors.gray600 }}>
          {props.note}
        </div>
      )}

      {props.error && (
        <div className="body-2 mt-8" style={{ color: Colors.red }}>
          {props.error}
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

SelectFile.defaultProps = {
  mb: '16px',
  accept: FILE_EXTENSIONS
}
