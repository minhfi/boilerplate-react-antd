import { FC, ReactElement } from 'react'
import { Switch as SwitchBasic, SwitchProps } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Colors } from 'src/constants/theme'
import { TChangeEvent } from 'src/interfaces'
import { Popover } from '../popover'
import './style.scss'

interface ISwitchProps extends Omit<SwitchProps, 'onChange'> {
  name?: string
  label?: string
  note?: string
  required?: boolean
  popoverContent?: string | ReactElement
  onChange?: (event: TChangeEvent) => void
}

export type TChangeEventSwitch = { target: { name: string; value: boolean } }

export const Switch: FC<ISwitchProps> = ({ label, note, required, popoverContent, ...props }) => {
  const handleChange = (checked: boolean) => {
    const eventCustom: TChangeEventSwitch = {
      target: {
        name: props.name as string,
        value: checked
      }
    }

    props.onChange && props.onChange(eventCustom)
  }

  return (
    <div className="switch">
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

      <SwitchBasic {...props} onChange={handleChange}/>

      {note && (
        <div>
          <div className="meta" style={{ color: Colors.gray600 }}>
            {note}
          </div>
        </div>
      )}
    </div>
  )
}
