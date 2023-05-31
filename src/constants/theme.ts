import { Colors } from './antd-colors'

export const primaryFont = 'Inter, sans-serif'
export const primaryColor = '#2A3042'

export const theme = {
  token: {
    fontFamily: primaryFont,
    colorPrimary: Colors.primary,
    ...Colors
  }
}
