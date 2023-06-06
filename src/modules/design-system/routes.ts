import { IRouterOption } from 'src/interfaces'
import DesignSystem from '.'

export const DesignSystemRoutes: IRouterOption[] = [
  {
    path: '/design-system',
    exact: true,
    component: DesignSystem,
    isRequired: false
  }
]
