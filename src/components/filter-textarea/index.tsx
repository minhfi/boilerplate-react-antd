import { FC, useEffect, useState } from 'react'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import {
  convertArrayToStringLine,
  convertStringLineToArray
} from 'src/utils/helpers.utils'
import { Colors } from 'src/constants/theme'
import { TextArea } from '../textarea'
import { Button } from '../button'
import { Badge } from '../badge'
import './style.scss'

interface IFilterTextAreaProps {
  name?: string
  label: string
  placeholder?: string
  value: string[]
  onChange?: (value?: string[]) => void
}

export const FilterTextArea: FC<IFilterTextAreaProps> = ({
  name,
  ...props
}) => {
  const [formData, setFormData] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const handleApply = () => {
    if (props.onChange) {
      setOpen(false)
      props.onChange(convertStringLineToArray(formData))
    }
  }

  // const numberOfArray = useMemo(() => {
  //   if (formData) {
  //     return formData.split('\n').filter((line) => line.trim() !== '').length
  //   }

  //   return undefined
  // }, [formData])

  useEffect(() => {
    if (props.value?.length) {
      setFormData(convertArrayToStringLine(props.value))
    }
  }, [props.value?.length])

  return (
    <div className="filter-textarea">
      <Dropdown
        trigger={['click']}
        overlayStyle={{ zIndex: '990' }}
        open={open}
        onOpenChange={setOpen}
        dropdownRender={() => {
          return (
            <div className="filter-textarea__dropdown">
              <TextArea
                placeholder="One item per line"
                value={formData}
                onChange={(event) => setFormData(event.target.value)}
              />
              <Button onClick={handleApply}>Apply</Button>
            </div>
          )
        }}
      >
        <div className="filter-textarea__select">
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
