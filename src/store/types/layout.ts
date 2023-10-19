import { ReactElement } from 'react'
import { TPageTitle } from 'src/interfaces'

/* layout actions */
export const LAYOUT_RESET_CONFIG = 'LAYOUT_RESET_CONFIG'
export const LAYOUT_SET_ASIDE = 'LAYOUT_SET_ASIDE'
export const LAYOUT_SET_HEADER = 'LAYOUT_SET_HEADER'
export const LAYOUT_SET_PAGE_TITLE = 'LAYOUT_SET_PAGE_TITLE'
export const LAYOUT_SET_LOADING = 'LAYOUT_SET_LOADING'
export const LAYOUT_SET_NAVIGATE = 'LAYOUT_SET_NAVIGATE'
export const LAYOUT_SET_OPEN_MENU = 'LAYOUT_SET_OPEN_MENU'
export const LAYOUT_SET_DRAWER = 'LAYOUT_SET_DRAWER'
export const LAYOUT_RESET_DRAWER = 'LAYOUT_RESET_DRAWER'

export interface IDrawer {
  title: string
  open: boolean
  content?: ReactElement | string
  action?: ReactElement | string
}

/**
 * state
 */
export interface ILayoutState {
  isHeader: boolean
  isAside: boolean
  isLoading: boolean
  pageTitle: TPageTitle | null
  navigateTo: string | null
  isOpenMenu: boolean
  drawer: IDrawer
}

/**
 * actions
 */
export interface ILayoutAction {
  type:
    | typeof LAYOUT_RESET_CONFIG
    | typeof LAYOUT_SET_ASIDE
    | typeof LAYOUT_SET_HEADER
    | typeof LAYOUT_SET_PAGE_TITLE
    | typeof LAYOUT_SET_LOADING
    | typeof LAYOUT_SET_NAVIGATE
    | typeof LAYOUT_SET_OPEN_MENU
    | typeof LAYOUT_SET_DRAWER
    | typeof LAYOUT_RESET_DRAWER
  value?: boolean | string | null | IDrawer | TPageTitle
}
