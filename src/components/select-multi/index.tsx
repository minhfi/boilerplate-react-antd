import { FC, ReactElement, useRef } from 'react'
import { Select as SelectBasic, SelectProps } from 'antd'
import { Colors } from 'src/constants/theme'
import { IObject, IOption } from 'src/interfaces'
import { omit } from 'lodash'
import './style.scss'
import { Popover } from '../popover'
import { InfoCircleOutlined } from '@ant-design/icons'

interface ISelectMultiProps extends Omit<SelectProps, 'value' | 'onChange'> {
  label?: string
  required?: boolean
  error?: (string | number)[] | null | IOption[]
  note?: string
  mb?: string
  width?: number | string
  options: IOption[]
  value: (string | number)[] | null | IOption[]
  popoverContent?: string | ReactElement
  onChange?: (
    values: (string | number)[] | IOption[],
    option: IOption[]
  ) => void
  onSearch?: (value?: string | number) => Promise<void>
}

export const SelectMulti: FC<ISelectMultiProps> = ({
  label,
  required,
  mb,
  error,
  note,
  popoverContent,
  ...props
}) => {
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const onChange = (
    values: (string | number)[] | IOption[],
    option: IOption | IOption[]
  ) => {
    if (values && props.onChange) {
      const options: IOption[] = option.map((item: IObject) => ({
        label: item.label,
        value: item.value
      }))

      props.onChange(values, options)
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
    <div className="select-multi" style={{ marginBottom: mb }}>
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

      <SelectBasic
        {...omit(props, 'options')}
        mode="multiple"
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
              className="select-multi__option"
              key={item.value}
              label={item.label}
              value={item.value}
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

SelectMulti.defaultProps = {
  mb: '16px',
  placeholder: 'Select an option',
  options: []
}
