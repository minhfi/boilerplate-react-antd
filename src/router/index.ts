import { IRouterOption } from 'src/interfaces'
import Login from 'src/modules/auth/login'
import { Forbidden } from 'src/modules/core/403'
import { NotFound } from 'src/modules/core/404'
import { InternalServerError } from 'src/modules/core/500'
import DesignSystem from 'src/modules/design-system'
import Home from 'src/modules/home'

export const routes: IRouterOption[] = [
  // auth
  {
    path: '/:type(login)?',
    exact: true,
    component: Login,
    isRequired: false
  },

  // private
  {
    path: '/home',
    exact: true,
    component: Home,
    isRequired: true
  },
  {
    path: '/design-system',
    exact: true,
    component: DesignSystem,
    isRequired: true
  },

  // error
  {
    path: '/403',
    exact: true,
    component: Forbidden
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  },
  {
    path: '/500',
    exact: true,
    component: InternalServerError
  },

  // last route handle 404 error
  {
    path: '*',
    component: NotFound
  }
]
