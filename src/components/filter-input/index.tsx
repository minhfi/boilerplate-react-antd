import { FC, useEffect, useState } from 'react'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { IObject, IOption } from 'src/interfaces'
import { Colors } from 'src/constants/theme'
import { SelectMulti } from '../select-multi'
import { Button } from '../button'
import { Badge } from '../badge'
import './style.scss'

interface IFilterInputProps<T = any> {
  name?: string
  label: string
  options: IOption[]
  placeholder?: string
  value: (string | number)[] | IOption[] | null
  onSearch?: (value?: string | number) => Promise<void>
  onChange?: (values: T, option: IOption[]) => void
}

interface IFormData {
  values: (string | number)[] | IOption[] | null
  options: IOption[]
}

export const FilterInput: FC<IFilterInputProps> = ({ name, ...props }) => {
  const [formData, setFormData] = useState<IFormData>({
    values: props.value,
    options: []
  })
  const [open, setOpen] = useState<boolean>(false)

  const onChange = (
    values: (string | number)[] | IOption[],
    option: IOption | IOption[]
  ) => {
    const options: IOption[] = option.map((item: IObject) => ({
      label: item.label,
      value: item.value
    }))

    setFormData({ values, options })
  }

  const handleApply = () => {
    if (formData && props.onChange) {
      setOpen(false)
      props.onChange(formData.values, formData.options)
    }
  }

  useEffect(() => {
    if (props.value?.length) {
      setFormData((prev) => ({ values: props.value, options: prev.options }))
    }
  }, [props.value?.length])

  useEffect(() => {
    if (open && props.onSearch) {
      props.onSearch()
    }
  }, [open])

  return (
    <div className="filter-input">
      <Dropdown
        trigger={['click']}
        overlayStyle={{ zIndex: '990' }}
        open={open}
        onOpenChange={setOpen}
        dropdownRender={() => {
          return (
            <div className="filter-input__dropdown">
              <div>
                <SelectMulti
                  showSearch
                  width="100%"
                  placeholder={props.placeholder}
                  value={formData.values}
                  options={props.options}
                  onChange={onChange}
                  onSearch={props.onSearch}
                />
              </div>
              <Button onClick={handleApply}>Apply</Button>
            </div>
          )
        }}
      >
        <div className="filter-input__select">
          <div>
            <div>{props.label}</div>
            {!!props.value?.length && (
              <Badge
                count={props.value?.length}
                color={Colors.gray900}
                background={Colors.gray300}
              />
            )}
          </div>
          <DownOutlined className="down-icon"/>
        </div>
      </Dropdown>
    </div>
  )
}
