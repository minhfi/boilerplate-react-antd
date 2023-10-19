import { FC, useMemo, useState } from 'react'
import { Dropdown } from 'antd'
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  FilterOutlined
} from '@ant-design/icons'
import { IGroupField } from 'src/interfaces'
import { InputSearch } from '../input-search'
import { Button } from '../button'
import './style.scss'

interface IFilterInputProps {
  options: IGroupField[]
  selectedFields?: string[]
  onChange?: React.Dispatch<React.SetStateAction<string[]>>
}

export const FilterGroup: FC<IFilterInputProps> = ({ ...props }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [search, setSearch] = useState('')

  const handleCheck = (value: string) => {
    setOpen(false)

    if (props.onChange) {
      props.onChange((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      )
    }
  }

  const OPTIONS = useMemo(() => {
    const options = props.options.map((item) => ({
      ...item,
      options: item.options.filter(({ label }) =>
        (label as string).toLocaleLowerCase()?.includes(search)
      )
    }))

    return options.filter((item) => !!item.options.length)
  }, [search, props.options])

  return (
    <div className="filter-group">
      <Dropdown
        trigger={['click']}
        overlayStyle={{ zIndex: '990' }}
        open={open}
        onOpenChange={setOpen}
        dropdownRender={() => {
          return (
            <div className="filter-group__dropdown">
              <div className="px-8">
                <InputSearch onChange={setSearch}/>
              </div>

              <div className="fx fx-column gap-8 filter-group__dropdown--wrapper">
                {OPTIONS.map((item, index) => (
                  <div key={index} className="filter-group__dropdown--item">
                    <div className="h-4 fx fx-ai-center px-8 body-2 f-medium">
                      {item.title}
                    </div>
                    <div className="fx fx-column">
                      {item.options.map((option, subIndex) => {
                        const isChecked = props.selectedFields?.find(
                          (item) => item === option.value
                        )
                        return (
                          <div
                            key={subIndex}
                            className="filter-group__dropdown--subitem body-2"
                            onClick={() => handleCheck(option.value as string)}
                          >
                            <div>{option.label}</div>
                            <div>
                              {isChecked
                                ? (
                                  <EyeOutlined/>
                                  )
                                : (
                                  <EyeInvisibleOutlined/>
                                  )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }}
      >
        <Button type="text" icon={<FilterOutlined/>}>
          Filter
        </Button>
      </Dropdown>
    </div>
  )
}
