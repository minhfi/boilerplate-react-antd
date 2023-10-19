import { ReactElement } from 'react'
import { RouteProps } from 'react-router'

export type TPageTitle = string | { title: string; path?: string }[]

export interface IObject {
  [key: string | number]: any
}

export interface IRouterOption {
  path: string
  component: RouteProps['component']
  name?: string
  exact?: boolean
  isRequired?: boolean
}

export interface IOption extends IObject {
  label: string | number | ReactElement
  value: string | number | null
  imageUrl?: string
  disabled?: boolean
  checked?: boolean
}
