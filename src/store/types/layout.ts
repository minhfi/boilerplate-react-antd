
/* layout actions */
export const LAYOUT_RESET_CONFIG = 'LAYOUT_RESET_CONFIG'
export const LAYOUT_SET_ASIDE = 'LAYOUT_SET_ASIDE'
export const LAYOUT_SET_HEADER = 'LAYOUT_SET_HEADER'
export const LAYOUT_SET_PAGE_TITLE = 'LAYOUT_SET_PAGE_TITLE'
export const LAYOUT_SET_LOADING = 'LAYOUT_SET_LOADING'
export const LAYOUT_SET_NAVIGATE = 'LAYOUT_SET_NAVIGATE'

/**
 * state
 */
export interface ILayoutState {
  isHeader: boolean
  isAside: boolean
  isLoading: boolean
  pageTitle: string | null
  navigateTo: string | null
}

/**
 * actions
 */
export interface ILayoutAction {
  type: typeof LAYOUT_RESET_CONFIG | typeof LAYOUT_SET_ASIDE | typeof LAYOUT_SET_HEADER | typeof LAYOUT_SET_PAGE_TITLE | typeof LAYOUT_SET_LOADING | typeof LAYOUT_SET_NAVIGATE
  value?: boolean | string | null
}
