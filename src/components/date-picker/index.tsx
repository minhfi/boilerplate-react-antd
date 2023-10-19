import { FC, ReactElement, useMemo } from 'react'
import { DatePicker as DatePickerBasic, DatePickerProps } from 'antd'
import type { Dayjs } from 'dayjs'
import moment from 'moment'
import dayjs from 'dayjs'
import { Colors } from 'src/constants/theme'
import { FORMAT_DATE } from 'src/constants'
import './style.scss'
import { Popover } from '../popover'
import { InfoCircleOutlined } from '@ant-design/icons'

interface IDatePickerCustom {
  mb?: string
  width?: string | number
  required?: boolean
  allowClear?: boolean
  error?: string
  name?: string
  label?: string
  note?: string
  value?: string
  disabled?: boolean
  popoverContent?: string | ReactElement
  onChange?: (date: string) => void
}

type IDatePickerProps = Omit<DatePickerProps, 'value' | 'onChange'> &
  IDatePickerCustom

export const DatePicker: FC<IDatePickerProps> = ({
  label,
  note,
  value,
  required,
  popoverContent,
  onChange,
  ...props
}) => {
  const handleChange = (date: Dayjs | null, dateString: string) => {
    if (dateString) {
      const dateFormat = dateString.split('.')
      const dates = [dateFormat[2], dateFormat[1], dateFormat[0]].join('-')
      return onChange && onChange(dates)
    }

    return onChange && onChange(dateString)
  }

  const VALUE = useMemo(() => {
    if (value) {
      return dayjs(moment(value).format(FORMAT_DATE), FORMAT_DATE)
    }

    return null
  }, [value])

  return (
    <div className="date-picker" style={{ marginBottom: props.mb }}>
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

      <DatePickerBasic
        disabled={props.disabled}
        allowClear={props.allowClear}
        name={props.name}
        format={props.format}
        placeholder={props.placeholder}
        value={VALUE}
        status={props.error ? 'error' : ''}
        style={{ width: props.width }}
        disabledDate={props.disabledDate}
        onChange={handleChange}
        popupClassName="date-picker__popup"
      />

      {note && (
        <div style={{ marginTop: '8px' }}>
          <div className="meta" style={{ color: Colors.gray600 }}>
            {note}
          </div>
        </div>
      )}

      {props.error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.red }}>
            {props.error}
          </div>
        </div>
      )}
    </div>
  )
}

DatePicker.defaultProps = {
  mb: '16px',
  placeholder: 'Select a option',
  allowClear: true,
  format: FORMAT_DATE
}
