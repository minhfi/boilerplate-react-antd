import { FC } from 'react'
import { Divider } from 'antd'
import { ButtonUI } from './button'
import { TypographyUI } from './typography'
import { InputUI } from './input'
import { DrawerUI } from './drawer'
import { NotificationUI } from './notification'
import { LoadingUI } from './loading'
import { ModalUI } from './modal'
import { ShowColumnUI } from './show-column'
import { CheckboxUI } from './checkbox'
import { SwitchUI } from './switch'
import { SelectUI } from './select'
import { SelectMultiUI } from './select-multi'
import { InputSearchUI } from './input-search'
import { TextAreaUI } from './textarea'
import { SelectStatusUI } from './select-status'
import { ImageUI } from './image'
import { DatePickerUI } from './date-picker'
import { SelectBlockUI } from './select-block'
import { TableUI } from './table'

export const DesignSystem: FC = () => {
  return (
    <div style={{ padding: '24px' }}>
      <TypographyUI/>
      <Divider/>

      <ButtonUI/>
      <Divider/>

      <InputUI/>
      <Divider/>

      <InputSearchUI/>
      <Divider/>

      <TextAreaUI/>
      <Divider/>

      <SelectUI/>
      <Divider/>

      <SelectMultiUI/>
      <Divider/>

      <SelectStatusUI/>
      <Divider/>

      <SelectBlockUI/>
      <Divider/>

      <DrawerUI/>
      <Divider/>

      <ModalUI/>
      <Divider/>

      <NotificationUI/>
      <Divider/>

      <LoadingUI/>
      <Divider/>

      <ShowColumnUI/>
      <Divider/>

      <CheckboxUI/>
      <Divider/>

      <SwitchUI/>
      <Divider/>

      <ImageUI/>
      <Divider/>

      <DatePickerUI/>
      <Divider/>

      <TableUI/>
      <Divider/>
    </div>
  )
}
