import { TPageTitle } from 'src/interfaces'
import {
  LAYOUT_SET_DRAWER,
  LAYOUT_SET_LOADING,
  LAYOUT_RESET_CONFIG,
  LAYOUT_SET_ASIDE,
  LAYOUT_SET_HEADER,
  LAYOUT_SET_PAGE_TITLE
} from './../types'
import {
  IDrawer,
  ILayoutAction,
  LAYOUT_RESET_DRAWER,
  LAYOUT_SET_OPEN_MENU
} from './../types/layout'

export const resetLayoutConfig = (): ILayoutAction => ({
  type: LAYOUT_RESET_CONFIG
})

export const setLayoutAside = (value: boolean): ILayoutAction => ({
  type: LAYOUT_SET_ASIDE,
  value
})

export const setLayoutHeader = (value: boolean): ILayoutAction => ({
  type: LAYOUT_SET_HEADER,
  value
})

export const setLayoutPageTitle = (value: TPageTitle): ILayoutAction => ({
  type: LAYOUT_SET_PAGE_TITLE,
  value
})

export const setLayoutLoading = (value: boolean): ILayoutAction => ({
  type: LAYOUT_SET_LOADING,
  value
})

export const setLayoutOpenMenu = (value: boolean): ILayoutAction => ({
  type: LAYOUT_SET_OPEN_MENU,
  value
})

export const setLayoutDrawer = (value: IDrawer): ILayoutAction => ({
  type: LAYOUT_SET_DRAWER,
  value
})

export const resetLayoutDrawer = (): ILayoutAction => ({
  type: LAYOUT_RESET_DRAWER
})
