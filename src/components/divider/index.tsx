import { FC } from 'react'
import { Divider as DividerBasic } from 'antd'
import './style.scss'
import { Colors } from 'src/constants/theme'

interface IDividerProps {
  mb?: number
  mt?: number
  color?: string
}

export const Divider: FC<IDividerProps> = ({ color, ...props }) => {
  return (
    <DividerBasic
      {...props}
      style={{
        border: `1px solid ${color}`,
        marginBottom: props.mb,
        marginTop: props.mt
      }}
      className="divider"
    />
  )
}

Divider.defaultProps = {
  mt: 24,
  mb: 24,
  color: Colors.gray500
}
