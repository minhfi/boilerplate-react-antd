import { FC, ReactElement } from 'react'
import { Checkbox as CheckboxBasic, CheckboxProps } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import './style.scss'
import { Colors } from 'src/constants/theme'

interface ICheckboxProps extends Omit<CheckboxProps, 'onChange'> {
  required?: boolean
  name?: string
  label?: string | number | ReactElement
  checked?: boolean
  disabled?: boolean
  mb?: number
  note?: string
  error?: string | boolean
  onChange?: (event: TChangeEventCheckBox) => void
}

export type TChangeEventCheckBox = CheckboxChangeEvent & {
  target: { name: string; value: boolean }
}

export const Checkbox: FC<ICheckboxProps> = ({ required, label, note, error, ...props }) => {
  const handleChange = (event: CheckboxChangeEvent) => {
    const eventCustom: TChangeEventCheckBox = {
      ...event,
      target: {
        name: event.target.name as string,
        checked: event.target.checked,
        value: event.target.checked
      }
    }

    props.onChange && props.onChange(eventCustom)
  }

  return (
    <div style={{ marginBottom: props.mb }}>
      <CheckboxBasic
        {...props}
        onChange={handleChange}
        className="checkbox"
      >
        <div className="fx fx-ai-center body-2">
          {label}{required && <span className="ml-4" style={{ color: Colors.red }}>*</span>}
        </div>
      </CheckboxBasic>

      {note && (
        <div style={{ marginTop: '6px' }}>
          <div className="meta" style={{ color: Colors.gray600 }}>{note}</div>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.red }}>{error}</div>
        </div>
      )}
    </div>
  )
}

Checkbox.defaultProps = {
  mb: 16
}
