import { ChangeEvent, FC, useRef, useState } from 'react'
import { Input as InputBasic } from 'antd'
import { InputProps } from 'antd/lib/input'
import { IconSearch } from 'src/assets/icons'
import './style.scss'

export interface IInputSearchProps extends Omit<InputProps, 'onChange'> {
  width?: number
  onChange?: (value: string) => void
}

export const InputSearch: FC<IInputSearchProps> = (props) => {
  const inputRef = useRef<NodeJS.Timeout | null>(null)

  const [value, setValue] = useState<string>('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)

    if (inputRef.current) {
      clearTimeout(inputRef.current)
    }

    if (!value?.length || value?.length >= 3) {
      inputRef.current = setTimeout(() => {
        props.onChange && props.onChange(value)
      }, 400)
    }
  }

  return (
    <InputBasic
      className="input-search"
      {...props}
      value={value}
      onChange={onChange}
      style={{ width: props.width, minWidth: props.width }}
      prefix={<IconSearch width={20} height={20}/>}
    />
  )
}

InputSearch.defaultProps = {
  placeholder: 'Search'
}
