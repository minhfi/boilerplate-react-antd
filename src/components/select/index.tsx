import { FC, ReactElement, useRef } from 'react'
import { Select as SelectBasic, SelectProps } from 'antd'
import { omit } from 'lodash'
import { Colors } from 'src/constants/theme'
import { IObject, IOption } from 'src/interfaces'
import './style.scss'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Popover } from '../popover'

interface ISelectProps extends Omit<SelectProps, 'value' | 'onChange'> {
  label?: string
  required?: boolean
  note?: string
  error?: string | number | null | IOption
  mb?: string | number
  width?: string | number
  options: IOption[]
  value: string | number | null | IOption
  popoverContent?: string | ReactElement
  onChange?: (value: string | number | IOption, option: IOption) => void
  onSearch?: (value?: string | number) => Promise<void>
}

export const Select: FC<ISelectProps> = ({
  label,
  required,
  mb,
  popoverContent,
  note,
  error,
  ...props
}) => {
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const onChange = (value: string | number | IOption, option: IObject) => {
    if (value && props.onChange) {
      props.onChange(value, {
        label: option.label,
        value: option.value
      })
    }
  }

  const onSearch = (value: string | number) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    timeout.current = setTimeout(() => {
      props.onSearch && props.onSearch(value)
    }, 400)
  }

  return (
    <div className="select" style={{ marginBottom: mb }}>
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

      <SelectBasic
        {...omit(props, 'options')}
        onChange={onChange}
        onSearch={onSearch}
        status={error ? 'error' : ''}
        style={{ width: props.width }}
        filterOption={(input, option) => {
          if (props.onSearch) {
            return true
          }

          return (option?.label as string)
            ?.toLowerCase()
            .includes(input.toLowerCase())
        }}
      >
        {props.options.map((item) => {
          return (
            <SelectBasic.Option
              className="select-option"
              key={item.value}
              value={item.value}
              label={item.label}
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.label as string}
                  width={16}
                  height={16}
                />
              )}
              <div className="body-2">{item.label}</div>
            </SelectBasic.Option>
          )
        })}
      </SelectBasic>

      {note && (
        <div style={{ marginTop: '6px' }}>
          <div className="meta" style={{ color: Colors.gray600 }}>
            {note}
          </div>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.red }}>
            {error}
          </div>
        </div>
      )}
    </div>
  )
}

Select.defaultProps = {
  mb: '16px',
  placeholder: 'Select an option',
  options: []
}
