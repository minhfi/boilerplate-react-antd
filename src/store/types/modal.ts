import { ReactElement } from 'react'

/* layout actions */
export const MODAL = 'MODAL'
export const RESET_MODAL = 'RESET_MODAL'

/**
 * state
 */
export interface IModalState {
  open?: boolean
  title?: string
  content?: ReactElement | string
  width?: string | number
}

/**
 * actions
 */
export interface IModalAction {
  type: typeof MODAL | typeof RESET_MODAL
  value?: IModalState
}
