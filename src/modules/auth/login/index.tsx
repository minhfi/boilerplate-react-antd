import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useValidation } from 'src/hooks/useValidation'
import { setLayoutLoading } from 'src/store/actions'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { formDataSchema } from './schema'
import { AUTH_LOGIN } from 'src/store/types'
import './style.scss'

interface IFormData {
  email: string
  password: string
}

const Login:FC = () => {
  const dispatch = useDispatch()
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: ''
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(
      (prev) => ({
        ...prev,
        [name]: value
      })
    )
  }

  const handleSubmit = async () => {
    try {
      const isValid = await validate({ schema: formDataSchema, data: { ...formData } })
      if (!isValid) return null

      dispatch(setLayoutLoading(true))

      dispatch({
        type: AUTH_LOGIN,
        payload: formData
      })
    } catch (error) {

    } finally {
      dispatch(setLayoutLoading(false))
    }
  }

  return (
    <div className="login">
      <div className="login-form">
        <Input
          required
          label="Email"
          name="email"
          placeholder="Write your email"
          value={formData.email}
          onChange={handleChangeInput}
          error={errors.email}
        />

        <Input
          required
          label="Password"
          type="password"
          name="password"
          placeholder="Write your password"
          value={formData.password}
          onChange={handleChangeInput}
          error={errors.password}
        />

        <Button onClick={handleSubmit} sx={{ marginTop: 4 }}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
