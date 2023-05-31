import { combineReducers } from 'redux'
import { reducer as layout } from './layout'
import { reducer as modal } from './modal'
import { reducer as auth } from './auth'

export const reducers = combineReducers({
  layout,
  modal,
  auth
})
