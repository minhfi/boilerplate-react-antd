import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import { getLayoutIsLoading } from 'src/store/selectors'
import './style.scss'

export const Loading: FC = () => {
  const isLoading = useSelector(getLayoutIsLoading)

  return (
    <div
      className="loading"
      style={{ display: isLoading ? 'flex' : 'none' }}
    >
      <Spin/>
    </div>
  )
}
