import { REGEXP_PASSWORD } from 'src/constants/regex'
import { mixed, object, ref, string } from 'yup'

export const formDataSchema = object().shape({
  firstname: string().required('This field is required.'),
  email: string()
    .email('Email is invalid.')
    .required('This field is required.'),
  password: string()
    .required('This field is required.')
    .min(8, 'Password must be at least 8 characters.')
    .test(
      'at-least-one-letter-and-number',
      'Password must be at least 1 letter and 1 number.',
      (password) => password ? REGEXP_PASSWORD.mustHaveLetterAndNumber.test(password) : false)
    .test(
      'at-least-one-lowercase-and-uppercase',
      'Password must be at least 1 lowercase and 1 uppercase.',
      (password) => password ? REGEXP_PASSWORD.mustHaveLowercaseAndUppercase.test(password) : false)
    .test(
      'at-least-one-special-character',
      'Password must be at least 1 special character (#?!@$%^&*-)',
      (password) => password ? REGEXP_PASSWORD.mustHaveSpecialCharacter.test(password) : false),
  passwordRepeat: string().oneOf(
    [ref('password'), null],
    'Passwords must match.'
  ),
  agreeWithPrivacyPolicy: mixed().test({
    message: 'This field is required.',
    test: (val) => val || false
  }),
  agreeWithTermsAndConditions: mixed().test({
    message: 'This field is required.',
    test: (val) => val || false
  })
})
