import { FC, HTMLInputTypeAttribute, ChangeEvent, ReactElement } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Input as InputBasic } from 'antd'
import { InputProps } from 'antd/lib/input'
import { REGEX_IS_NUMBER } from 'src/constants/regex'
import { Colors } from 'src/constants/theme'
import { Popover } from '../popover'
import './style.scss'

export interface IInputNumberProps extends InputProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  required?: boolean
  error?: string | number
  mb?: string
  width?: string | number
  popoverContent?: string | ReactElement
}

export const InputNumber: FC<IInputNumberProps> = ({
  label,
  error,
  mb,
  required,
  popoverContent,
  ...props
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    if (REGEX_IS_NUMBER.test(value)) {
      if (
        value.length > 1 &&
        value.charAt(0) === '0' &&
        value.charAt(1) !== '.'
      ) {
        return (
          props.onChange &&
          props.onChange({
            ...event,
            target: { ...event.target, name: name, value: value.slice(1) }
          })
        )
      }

      return props.onChange && props.onChange(event)
    }

    if (value === '') {
      return (
        props.onChange &&
        props.onChange({
          ...event,
          target: { ...event.target, name: name, value: '' }
        })
      )
    }
  }

  return (
    <div className="input-number" style={{ marginBottom: mb }}>
      {label && (
        <div className="fx fx-ai-center gap-4 body-2 f-medium mb-8">
          <div>{label}</div>
          {required && <div style={{ color: Colors.red }}>*</div>}
          {popoverContent && (
            <Popover content={popoverContent}>
              <InfoCircleOutlined style={{ color: Colors.gray550 }} className="cursor-help"/>
            </Popover>
          )}
        </div>
      )}

      <InputBasic
        {...props}
        onChange={onChange}
        status={error ? 'error' : ''}
        style={{ width: props.width }}
      />

      {error && (
        <div className="mt-8">
          <div className="body-2" style={{ color: Colors.red }}>
            {error}
          </div>
        </div>
      )}
    </div>
  )
}

InputNumber.defaultProps = {
  type: 'text',
  mb: '16px',
  placeholder: ''
}
