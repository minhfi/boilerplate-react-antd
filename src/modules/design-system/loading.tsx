import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'src/components/button'
import { setLayoutLoading } from 'src/store/actions'

export const LoadingUI:FC = () => {
  const dispatch = useDispatch()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="heading-5">Loading</div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button onClick={() => dispatch(setLayoutLoading(true))}>Loading</Button>
      </div>
    </div>
  )
}
