import { FC, useEffect, useState } from 'react'
import { Card } from 'antd'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { TChangeEvent } from 'src/interfaces'
import { getApiErrorMessage } from 'src/utils/axios.utils'
import { useValidation } from 'src/hooks/useValidation'
import { setLayoutHeader, setLayoutLoading } from 'src/store/actions'
import { Checkbox } from 'src/components/checkbox'
import { Divider } from 'src/components/divider'
import { notify } from 'src/utils/notify.util'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { ENotify } from 'src/constants/enum'
import { Colors } from 'src/constants/theme'
import { useHistory } from 'react-router'
import { AuthApi } from 'src/apis'
import { formDataSchema } from './schema'
import './style.scss'

export interface ISignUpForm {
  firstname: string
  email: string
  password: string
  passwordRepeat: string
  agreeWithPrivacyPolicy: boolean
  agreeWithTermsAndConditions: boolean
  [key: string | number]: any
}

export const SignUp: FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { errors, setErrors, validate } = useValidation<ISignUpForm>()
  const [formData, setFormData] = useState<ISignUpForm>({
    firstname: '',
    email: '',
    password: '',
    passwordRepeat: '',
    customFields: [],
    agreeWithPrivacyPolicy: false,
    agreeWithTermsAndConditions: false
  })

  const handleRedirect = (path: string) => window.open(path)

  const handleChange = (event: TChangeEvent) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSignUp = async () => {
    try {
      const isValid = await validate({
        schema: formDataSchema,
        data: { ...formData }
      })

      formData.customFields.forEach((item: any) => {
        if (!item.value && item.isRequired) {
          setErrors((prev) => ({
            ...prev,
            [item.name]: 'This field is required.'
          }))
        }
      })

      if (!isValid) return null

      dispatch(setLayoutLoading(true))

      const payload = {
        ...formData
      }

      await AuthApi.signUp(payload)

      history.push('/thank-you-page')
      notify({
        type: ENotify.SUCCESS,
        message:
          'Signup affiliate successfully. Please wait for admin approval.'
      })
    } catch (error) {
      notify({
        type: ENotify.ERROR,
        message: getApiErrorMessage(error)
      })
    } finally {
      dispatch(setLayoutLoading(false))
    }
  }

  useEffect(() => {
    dispatch(setLayoutHeader(true))
  }, [])

  return (
    <div className="signup">
      <Card className="signup-form" bordered={false}>
        <div className="heading-5 mb-24">Affiliate Sign Up</div>

        <Input
          required
          label="First Name"
          name="firstname"
          placeholder="Enter your first name"
          error={errors.firstname}
          value={formData.firstname}
          onChange={handleChange}
        />

        <Input
          required
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          error={errors.email}
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          required
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          error={errors.password}
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          required
          label="Password Confirmation"
          type="password"
          name="passwordRepeat"
          placeholder="Enter your confirm password"
          error={errors.passwordRepeat}
          value={formData.passwordRepeat}
          onChange={handleChange}
        />

        <Divider mt={32} mb={32}/>

        <div className="mt-32">
          <div className="mb-16">
            <div className="fx fx-ai-center">
              <Checkbox
                mb={0}
                name="agreeWithPrivacyPolicy"
                label="Agree with"
                checked={formData.agreeWithPrivacyPolicy}
                onChange={handleChange}
              />
              <div
                className="signup-form__link body-2 f-semi-bold"
                onClick={() => handleRedirect('/terms-conditions')}
              >
                Terms and Conditions{' '}
                <span className="body-2 ml-4" style={{ color: Colors.red }}>
                  *
                </span>
              </div>
            </div>
            {errors.agreeWithPrivacyPolicy && (
              <div className="body-2 mt-8" style={{ color: Colors.red }}>
                {errors.agreeWithPrivacyPolicy}
              </div>
            )}
          </div>

          <div>
            <div className="fx fx-ai-center">
              <Checkbox
                mb={0}
                name="agreeWithTermsAndConditions"
                label="Agree with"
                checked={formData.agreeWithTermsAndConditions}
                onChange={handleChange}
              />
              <div
                className="signup-form__link body-2 f-semi-bold"
                onClick={(e) => handleRedirect('/privacy-policy')}
              >
                Privacy Policy
                <span className="body-2 ml-4" style={{ color: Colors.red }}>
                  *
                </span>
              </div>
            </div>
            {errors.agreeWithTermsAndConditions && (
              <div className="body-2 mt-8" style={{ color: Colors.red }}>
                {errors.agreeWithTermsAndConditions}
              </div>
            )}
          </div>
        </div>

        <Button block className="mt-24" onClick={handleSignUp}>
          Sign Up
        </Button>

        <div className="mt-32 fx fx-jc-center">
          <Link className="link body-2" to="/">
            Already have an account?
          </Link>
        </div>
      </Card>
    </div>
  )
}
