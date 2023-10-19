import { FC } from 'react'
import { Spin } from 'antd'
import './style.scss'

export const FlashScreen: FC = () => {
  return (
    <div className="flash-screen">
      <Spin/>
    </div>
  )
}
