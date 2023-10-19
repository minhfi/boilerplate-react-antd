import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetModal } from 'src/store/actions'
import { IGroupField, IOption } from 'src/interfaces'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Button } from '../button'
import { IColumnsProps } from '.'
import { Checkbox } from '../checkbox'

export const ColumnsContent: FC<IColumnsProps> = ({
  onShowColumns,
  ...props
}) => {
  const dispatch = useDispatch()
  const [options, setOptions] = useState<IGroupField[]>(props.options)

  const handleClose = () => dispatch(resetModal())

  const areAllOptionsChecked = (groupOptions: IOption[]) => {
    return groupOptions.every(({ checked }) => checked)
  }

  const handleCheckboxAll = (title: string) => {
    const optionsMap = options.map((option) => {
      if (option.title === title) {
        const isAllChecked = areAllOptionsChecked(option.options)
        option.options = option.options?.map((item) => {
          if (!item.disabled) {
            item.checked = !isAllChecked
          }

          return item
        })
      }

      return option
    })

    setOptions(optionsMap)
  }

  const handleCheckbox = (event: CheckboxChangeEvent, objNumber: number) => {
    const name = event.target.name as string
    const checked = event.target.checked

    const optionsMap = options.map((option, index) => {
      if (index === objNumber) {
        option.options = option.options?.map((item) => {
          if (item.label === name) {
            item.checked = checked
          }

          return item
        })
      }

      return option
    })

    setOptions(optionsMap)
  }

  const handleSave = () => {
    onShowColumns(options)
    handleClose()
  }

  return (
    <div className="columns-content">
      <div className="columns-content__body">
        {options.map((option, index) => {
          const areAllChecked = areAllOptionsChecked(option.options)
          return (
            <div key={index} className="columns-content__body--item">
              <div className="fx subtitle-1 f-medium cursor-pointer gap-8" onClick={() => handleCheckboxAll(option.title)}>
                <Checkbox
                  checked={areAllChecked}
                />
                <span style={{ marginLeft: '-16px' }}>{option.title}</span>
              </div>
              <div>
                {option.options?.map((item, subIndex) => {
                  return (
                    <Checkbox
                      key={subIndex}
                      label={item.label}
                      checked={item.checked}
                      disabled={item.disabled}
                      name={item.label as string}
                      onChange={(event: CheckboxChangeEvent) =>
                        handleCheckbox(event, index)}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div className="columns-content__action">
        <Button type="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  )
}
