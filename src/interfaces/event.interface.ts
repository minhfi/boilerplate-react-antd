import { ChangeEvent } from 'react'
import { TChangeEventCheckBox } from 'src/components/checkbox'
import { TChangeEventSwitch } from 'src/components/switch'
import { IOption } from './object.interface'

export type TChangeEvent =
  | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  | TChangeEventCheckBox | TChangeEventSwitch

export type TChangeEventSelect = string | number | (string | number)[] | IOption | IOption[]
