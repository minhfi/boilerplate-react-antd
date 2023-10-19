import { FC, ReactElement, useEffect, useMemo, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DatePicker } from 'antd'
import moment from 'moment'
import { CalendarOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { RangePickerProps } from 'antd/es/date-picker'
import { FORMAT_DATE } from 'src/constants'
import { Colors } from 'src/constants/theme'
import { PRESETS } from './constants'
import { Popover } from '../popover'
import { Button } from '../button'
import './style.scss'

interface IDateRangePickerCustom {
  mb?: string | number
  width?: string | number
  required?: boolean
  allowClear?: boolean
  error?: string
  name?: string
  label?: string
  note?: string
  values?: (string | null)[]
  disabled?: boolean
  popoverContent?: string | ReactElement
  onChange?: (date: (string | null)[]) => void
}

type IDateRangePickerProps = Omit<RangePickerProps, 'value' | 'onChange'> &
  IDateRangePickerCustom

type RangeValue = [Dayjs | null, Dayjs | null] | null

export const DateRangePicker: FC<IDateRangePickerProps> = ({
  label,
  note,
  required,
  popoverContent,
  onChange,
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [values, setValues] = useState<(string | null)[]>(
    props.values || [null, null]
  )
  const [valuesLocal, setValuesLocal] = useState<(string | null)[]>(
    props.values || [null, null]
  )
  const [presets] = useState(PRESETS)

  const formatDateToDash = (date: string) => {
    const dates = date?.split('.')

    if (dates?.length === 3) {
      return [dates[2], dates[1], dates[0]].join('-')
    }

    return null
  }

  const handleChange = (date: RangeValue, dateString: string[]) => {
    if (dateString) {
      const data = dateString.map((date) => formatDateToDash(date))
      return setValuesLocal(data)
    }

    return setValuesLocal(dateString)
  }

  const handleApply = () => {
    setOpen(false)
    onChange && onChange(valuesLocal)
  }

  const handlePreset = (dates: (string | null)[]) => {
    setValues(dates)
    setOpen(false)
    onChange && onChange(dates)
  }

  useEffect(() => {
    if (props.values) {
      setValues(props.values)
      setValuesLocal(props.values)
    }
  }, [props.values])

  const VALUE = useMemo(() => {
    const valuesFormat = values?.map((value) =>
      value ? dayjs(moment(value).format(FORMAT_DATE), FORMAT_DATE) : null
    )

    return valuesFormat as RangeValue
  }, [values])

  const PRESET = useMemo(() => {
    const preset = presets.find(
      ({ value }) => JSON.stringify(value) === JSON.stringify(values)
    )

    return preset
  }, [presets, values])

  return (
    <div className="date-range-picker" style={{ marginBottom: props.mb }}>
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

      <div className="position-relative">
        {PRESET && (
          <Button
            disabled={props.disabled}
            type="default"
            endIcon={<CalendarOutlined/>}
            onClick={() => setOpen(true)}
          >
            {PRESET.label}
          </Button>
        )}

        <DatePicker.RangePicker
          className={PRESET ? 'date-range-picker__preset' : ''}
          popupClassName="date-range-picker__popup"
          open={open}
          disabled={props.disabled}
          format={FORMAT_DATE}
          allowClear={false}
          value={VALUE}
          superPrevIcon={null}
          superNextIcon={null}
          onChange={handleChange}
          style={{ width: props.width }}
          status={props.error ? 'error' : ''}
          onOpenChange={setOpen}
          disabledDate={props.disabledDate}
          // disabledDate={(current) => current && current > dayjs().endOf('day')}
          renderExtraFooter={() => <Button onClick={handleApply}>Apply</Button>}
          panelRender={(panelNode) => (
            <div className="fx">
              <div className="date-range-picker__panel">
                {presets.map((item, index) => {
                  const isActive =
                    JSON.stringify(item.value) === JSON.stringify(values)

                  return (
                    <div
                      className={
                        isActive ? 'date-range-picker__panel--active' : ''
                      }
                      key={index}
                      onClick={() => handlePreset(item.value)}
                    >
                      {item.label}
                    </div>
                  )
                })}
              </div>
              {panelNode}
            </div>
          )}
        />
      </div>

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

DateRangePicker.defaultProps = {
  mb: 0,
  allowClear: true,
  format: FORMAT_DATE
}
