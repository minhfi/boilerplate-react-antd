import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card } from 'antd'
import { TChangeEvent } from 'src/interfaces'
import { useValidation } from 'src/hooks/useValidation'
import { setLayoutHeader, setLayoutLoading } from 'src/store/actions'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { AUTH_LOGIN } from 'src/store/types'
import { formDataSchema } from './schema'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from 'src/hooks/useDocumentTitle'
import './style.scss'

interface IFormData {
  email: string
  password: string
}

export const SignIn: FC = () => {
  useDocumentTitle('Sign In | AFFSCALE')

  const dispatch = useDispatch()
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: ''
  })

  const handleChange = (e: TChangeEvent) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async () => {
    try {
      const isValid = await validate({
        schema: formDataSchema,
        data: { ...formData }
      })
      if (!isValid) return null

      dispatch(setLayoutLoading(true))

      dispatch({
        type: AUTH_LOGIN,
        payload: formData
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(setLayoutHeader(true))
  }, [])

  return (
    <div className="login">
      <Card bordered={false} className="login-form">
        <div className="heading-5 mb-24">Log In</div>

        <Input
          required
          autoFocus
          label="Email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          handleEnter={handleLogin}
          error={errors.email}
        />

        <Input
          mb={0}
          required
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          handleEnter={handleLogin}
          error={errors.password}
        />

        <a className="login-forgot mt-4 meta" href="/">
          Forgot password?
        </a>

        <Button block className="mt-24" onClick={handleLogin}>
          Log in
        </Button>

        <div className="login-divider my-32">
          <hr className="login-divider__left"/>
          <span className="login-divider__text meta">
            Don't have an account?
          </span>
          <hr className="login-divider__right"/>
        </div>

        <Button block type="default">
          <Link className="link" to="/sign-up" style={{ width: '100%' }}>
            Affiliate Sign Up
          </Link>
        </Button>
      </Card>
    </div>
  )
}
