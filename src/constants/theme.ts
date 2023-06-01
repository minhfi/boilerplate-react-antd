export const primaryFont = 'Inter, sans-serif'

// colors mapping
export const Colors = {
  black: '#000',
  white: '#fff',
  primary: '#F7FB6F',
  primary300: '#FAFDAA',
  primary500: '#F2F92F',
  positive: '#3AD98A',
  negative: '#EA2E4E',
  neutral100: '#F1F2F3',
  neutral200: '#DADBE7',
  neutral300: '#80818E',
  neutral400: '#5B5C67',
  neutral500: '#42434D',
  neutral600: '#2C2D35',
  neutral700: '#24252D',
  neutral800: '#1D1E26',
  neutral900: '#181920'
}

export const theme = {
  token: {
    fontFamily: primaryFont,
    colorPrimary: Colors.primary,
    ...Colors
  }
}
