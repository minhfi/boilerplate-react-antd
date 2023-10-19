import { object, string } from 'yup'

export const formDataSchema = object().shape({
  email: string()
    .email('Email is invalid.')
    .required('This field is required.'),
  password: string().required('This field is required.')
})
