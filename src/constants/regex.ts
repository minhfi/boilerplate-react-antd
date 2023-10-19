export const REGEX_IS_NUMBER = /^(\d+)?(\.\d*)?$/

export const REGEXP_URL =
  /^(https?:\/\/)?[a-z0-9.-]+\.[a-z]{2,}(\/[^\s]*)?(\?[^\s]*)?$/i

export const REGEXP_PASSWORD: Record<string, RegExp> = {
  mustHaveLetterAndNumber: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d].+$/,
  mustHaveLowercaseAndUppercase: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d].+$/,
  mustHaveSpecialCharacter: /^(?=.*?[#?!@$%^&*-]).+$/,
  mustHaveNumber: /^(?=.*\d).+$/,
  mustHaveUppercase: /^(?=.*[A-Z]).+$/
}
