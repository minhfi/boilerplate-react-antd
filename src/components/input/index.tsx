import { FC, useCallback, useState, HTMLInputTypeAttribute, useMemo } from 'react'
import { Input as InputBasic } from 'antd'
import { InputProps } from 'antd/lib/input'
import { IconVisibility, IconVisibilityOff } from 'src/assets/icons'
import { Colors } from 'src/constants/theme'
import './style.scss'

export interface IInputProps extends InputProps {
  type?: HTMLInputTypeAttribute
  name?: string
  label?: string
  required?: boolean
  error?: string
  mb?: string
}

export const Input: FC<IInputProps> = ({ label, error, mb, required, ...props }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const type = props.type === 'password' && !showPassword ? 'password' : 'text'

  const toggleShowPassword = useCallback(() => setShowPassword(!showPassword), [showPassword])

  const ADDONAFTER = useMemo(() => {
    if (props.type === 'password') {
      return showPassword ? <IconVisibility onClick={toggleShowPassword}/> : <IconVisibilityOff onClick={toggleShowPassword}/>
    }

    return ''
  }, [props.type, showPassword, toggleShowPassword])

  return (
    <div className="input" style={{ marginBottom: mb }}>
      {label && (
        <div className="body1" style={{ marginBottom: '8px' }}>
          {label} {required && <span className="body2" style={{ color: Colors.negative }}>*</span>}
        </div>
      )}

      <InputBasic
        {...props}
        type={type}
        status={error ? 'error' : ''}
        addonAfter={ADDONAFTER}
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
  mb: '16px'
}
