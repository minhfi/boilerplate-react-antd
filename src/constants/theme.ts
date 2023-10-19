export const primaryFont = 'Inter, sans-serif'

// colors mapping
export const Colors = {
  black: '#000',
  white: '#fff',
  violet: '#930cff',

  primary: '#7063FF',
  blue100: '#F4F0FF',
  blue200: '#EBE8FF',
  blue300: '#CFCCFF',
  blue400: '#9E96FF',
  blue500: '#7063FF',
  blue600: '#402EFC',
  blue700: '#251cd6',
  blue800: '#110eb0',
  blue900: '#04068a',
  blue1000: '#020763',

  // primary: '#1f73ad',
  // blue100: '#CBE6FE',
  // blue200: '#8FD7F6',
  // blue300: '#4DA7D2',
  // blue400: '#338DC0',
  // blue500: '#00bfe2',
  // blue600: '#2E9CE8',
  // blue700: '#004E83',
  // blue800: '#004472',
  // blue900: '#003961',
  // blue1000: '#062A46',

  green: '#27ae60',
  green50: 'rgb(39 174 96 / 18%)',
  green100: '#A6F984',
  green200: '#91F173',
  green250: '#0ee0ba',
  green300: '#7EE764',
  green400: '#6BDA57',
  green500: '#008436',
  green700: '#41A43A',
  green800: '#368E30',
  green900: '#2C7826',
  green1000: '#22611E',

  orange100: '#f3b75a1f',
  orange300: '#f3b75a',
  orange500: '#ffa346',

  red: '#d93d46',
  red100: 'rgb(246 90 99 / 18%)',
  red200: '#FFB8C2',
  red300: '#FF8A9F',
  red400: '#FF5C7F',
  red500: '#f65a63',
  red600: '#D94146',
  red700: '#C31143',
  red800: '#AF103D',
  red900: '#9B0F36',
  red1000: '#870E30',

  gray100: '#FFFFFF',
  gray200: '#f4f6f9',
  gray250: '#f7f9fb',
  gray300: '#eaecef',
  gray350: '#d7dce2',
  gray400: '#e5e8ec',
  gray500: '#bec3c94c',
  gray550: '#bec3c9',
  gray600: '#8b979e',
  gray700: '#6e7a83',
  gray800: '#68747d',
  gray900: '#2f3137',
  gray1000: '#000000'
}

export const theme = {
  token: {
    fontFamily: primaryFont,
    colorPrimary: Colors.primary,
    ...Colors
  }
}
