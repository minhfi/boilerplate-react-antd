export const primaryFont = 'Inter, sans-serif'

// colors mapping
export const Colors = {
  black: '#000',
  white: '#fff',

  primary: '#005993',
  blue100: '#CBE6FE',
  blue200: '#8FD7F6',
  blue300: '#4DA7D2',
  blue400: '#338DC0',
  blue500: '#1A73AB',
  blue700: '#004E83',
  blue800: '#004472',
  blue900: '#003961',
  blue1000: '#062A46',

  green: '#4CB944',
  green100: '#A6F984',
  green200: '#91F173',
  green300: '#7EE764',
  green400: '#6BDA57',
  green500: '#5ACB4C',
  green700: '#41A43A',
  green800: '#368E30',
  green900: '#2C7826',
  green1000: '#22611E',

  red: '#EA114E',
  red100: '#FFE6E8',
  red200: '#FFB8C2',
  red300: '#FF8A9F',
  red400: '#FF5C7F',
  red500: '#EE2E63',
  red700: '#C31143',
  red800: '#AF103D',
  red900: '#9B0F36',
  red1000: '#870E30',

  gray100: '#FFFFFF',
  gray200: '#F4F8FB',
  gray300: '#F2F6F9',
  gray400: '#EAF3FD',
  gray500: '#C9D9EA',
  gray600: '#9EB3C9',
  gray700: '#8294A2',
  gray800: '#697F90',
  gray900: '#4B6477',
  gray1000: '#000000'
}

export const theme = {
  token: {
    fontFamily: primaryFont,
    colorPrimary: Colors.primary,
    ...Colors
  }
}
