import { Radio, RadioChangeEvent, Space } from 'antd'
import { FC } from 'react'
import { IOption } from 'src/interfaces'

interface IRadioGroupProps {
  value: string | number
  options: IOption[]
  onChange: (event: RadioChangeEvent) => void
}

export const RadioGroup: FC<IRadioGroupProps> = ({ value, options, onChange }) => {
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        {options.map((option) => (
          <Radio key={option.value} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  )
}
