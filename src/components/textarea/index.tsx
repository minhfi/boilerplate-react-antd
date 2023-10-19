import { FC, ReactElement } from 'react'
import { Input as InputBasic } from 'antd'
import { Colors } from 'src/constants/theme'
import { TextAreaProps } from 'antd/es/input'
import './style.scss'
import { Popover } from '../popover'
import { InfoCircleOutlined } from '@ant-design/icons'

export interface ITextAreaProps extends TextAreaProps {
  name?: string
  label?: string
  required?: boolean
  note?: string
  error?: string
  mb?: string
  width?: string | number
  popoverContent?: string | ReactElement
}

export const TextArea: FC<ITextAreaProps> = ({
  label,
  note,
  error,
  mb,
  required,
  popoverContent,
  ...props
}) => {
  return (
    <div className="textarea" style={{ marginBottom: mb }}>
      {label && (
        <div className="fx fx-ai-center gap-4 body-2 f-medium mb-8">
          <div>{label}</div>
          {required && <div style={{ color: Colors.red }}>*</div>}
          {popoverContent && (
            <Popover content={popoverContent}>
              <InfoCircleOutlined
                style={{ color: Colors.gray550 }}
                className="cursor-help"
              />
            </Popover>
          )}
        </div>
      )}

      <InputBasic.TextArea
        {...props}
        status={error ? 'error' : ''}
        style={{ width: props.width }}
      />

      {error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.red }}>
            {error}
          </div>
        </div>
      )}

      {note && (
        <div style={{ marginTop: '6px' }}>
          <div className="meta" style={{ color: Colors.gray600 }}>
            {note}
          </div>
        </div>
      )}
    </div>
  )
}

TextArea.defaultProps = {
  mb: '16px',
  placeholder: '',
  autoSize: { minRows: 4, maxRows: 10 }
}
