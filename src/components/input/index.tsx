import { FC, useCallback, useState, HTMLInputTypeAttribute } from 'react'
import { Input as InputAntd } from 'antd'
// import { IconVisibility, IconVisibilityOff } from 'src/assets/icons'
import { Colors } from 'src/constants/theme'

export interface InputProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  required?: boolean
  error?: string
  mb?: number
}

export const Input: FC<InputProps> = ({ label, error, mb, required, ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const type = props.type === 'password' && !showPassword ? 'password' : 'text'

  const toggleShowPassword = useCallback(() => setShowPassword(!showPassword), [showPassword])

  console.log({ toggleShowPassword })

  return (
    <div className="input" style={{ marginBottom: mb }}>
      {label && (
        <div className="body1" style={{ marginBottom: '8px' }}>
          {label} {required && <span className="body2" style={{ color: Colors.negative }}>*</span>}
        </div>
      )}

      <InputAntd
        {...props}
        type={type}
        status={error ? 'error' : ''}
      />

      {error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.negative }}>{error}</div>
        </div>
      )}
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  mb: 2
}
