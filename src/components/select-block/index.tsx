import { ChangeEvent, FC, useMemo, useRef, useState } from 'react'
import { Input } from 'antd'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { truncate } from 'src/utils/helpers.utils'
import { IOption } from 'src/interfaces'
import { Tooltip } from '../tooltip'
import { Tag } from '../tag'
import './style.scss'

export interface ISearchSelectBlock {
  search: string
  values: IOption[]
  options: IOption[]
}

interface ISelectBlockProps {
  search: ISearchSelectBlock
  values: IOption[]
  options: IOption[]
  colorIcon?: string
  colorSelected?: string
  onSearch?: (value: string) => void
  onRemove?: (option: IOption) => void
  onAdd?: (option: IOption) => void
}

export const SelectBlock: FC<ISelectBlockProps> = ({
  search,
  values,
  options,
  colorIcon,
  colorSelected,
  ...props
}) => {
  const inputRef = useRef<NodeJS.Timeout | null>(null)

  const [value, setValue] = useState<string>('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)

    if (inputRef.current) {
      clearTimeout(inputRef.current)
    }

    inputRef.current = setTimeout(() => {
      props.onSearch && props.onSearch(value)
    }, 400)
  }

  const OPTIONS = useMemo(() => {
    if (search.search) {
      return search.options
    }

    return options
  }, [search, options])

  const VALUES = useMemo(() => {
    if (search.search) {
      return search.values
    }

    return values
  }, [search, values])

  return (
    <section className="select-block">
      <div className="select-block__search">
        <Input placeholder="Search..." value={value} onChange={onChange}/>
      </div>
      <div className="select-block__content">
        {VALUES.map((item) => (
          <div
            key={item.value}
            className="select-block__content--item"
            onClick={() => props.onRemove && props.onRemove(item)}
          >
            <div>
              <Tooltip title={item.label as string}>
                <Tag label={truncate(item.label as string, 28)} color={colorSelected}/>
              </Tooltip>
            </div>
            <div>
              <CloseOutlined/>
            </div>
          </div>
        ))}

        {OPTIONS.map((item) => (
          <div
            key={item.value}
            className="select-block__content--item"
            onClick={() => props.onAdd && props.onAdd(item)}
          >
            <div>{item.label}</div>
            <div>
              <PlusOutlined style={{ color: colorIcon }}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
