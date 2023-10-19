import { mixed, object, string } from 'yup'

export const formDataSchema = object().shape({
  name: string()
    .required('This field is required.')
})

export const formDataSelectSchema = object().shape({
  option1: string()
    .required('This field is required.'),
  option2: string()
    .required('This field is required.')
})

export const formDataSelectMultiSchema = object().shape({
  option1: mixed().test({
    message: 'This field is required.',
    test: values => values.some((value: string | number) => value) || false
  }),
  option2: mixed().test({
    message: 'This field is required.',
    test: values => values.some((value: string | number) => value) || false
  })
})
