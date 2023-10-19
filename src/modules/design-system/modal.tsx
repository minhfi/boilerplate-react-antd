import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'src/components/button'
import { setModal } from 'src/store/actions'

export const ModalUI:FC = () => {
  const dispatch = useDispatch()

  const handleModal = () => {
    dispatch(setModal({
      open: true,
      title: 'Title',
      content: <div>Content</div>
    }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="heading-5">Modal</div>
      <Button type="default" onClick={handleModal}>Open modal</Button>
    </div>
  )
}
