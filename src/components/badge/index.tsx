import { FC } from 'react'
import { Badge as BadgeBasic } from 'antd'
import './style.scss'

export enum EBadgeSize {
  DEFAULT = 'default',
  SMALL = 'small'
}

interface IBadge {
  count?: number
  background?: string
  color?: string
  size?: EBadgeSize
}

export const Badge: FC<IBadge> = ({ count, background, color, size }) => {
  return (
    <BadgeBasic
      className="badge"
      showZero
      count={count || 0}
      size={size}
      style={{ backgroundColor: background, color: color }}
    />
  )
}

Badge.defaultProps = {
  size: EBadgeSize.SMALL,
  count: 0
}
