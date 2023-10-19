import { FC, HTMLInputTypeAttribute, ReactElement } from 'react'
import { Input as InputBasic } from 'antd'
import { InputProps } from 'antd/lib/input'
import { Colors } from 'src/constants/theme'
import { omit } from 'lodash'
import './style.scss'
import { Popover } from '../popover'
import { InfoCircleOutlined } from '@ant-design/icons'

export interface IInputProps extends InputProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  required?: boolean
  error?: string
  note?: string
  mb?: string | number
  width?: string | number
  popoverContent?: string | ReactElement
  handleEnter?: () => void
}

export const Input: FC<IInputProps> = ({
  label,
  note,
  error,
  mb,
  required,
  popoverContent,
  ...props
}) => {
  const InputField =
    props.type === 'password' ? InputBasic.Password : InputBasic

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      props.handleEnter && props.handleEnter()
    }
  }

  return (
    <div className="input" style={{ marginBottom: mb }}>
      {label && (
        <div className="fx fx-ai-center gap-4 body-2 f-medium mb-8">
          <div style={{ color: Colors.gray900 }}>{label}</div>
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

      <InputField
        {...omit(props, 'handleEnter')}
        type={props.type}
        onKeyDown={handleEnter}
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

Input.defaultProps = {
  type: 'text',
  mb: '16px',
  placeholder: ''
}
