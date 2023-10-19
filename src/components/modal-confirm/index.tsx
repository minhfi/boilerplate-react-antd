import { FC, ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { resetModal } from 'src/store/actions'
import { Button } from '../button'
import './style.scss'

interface ModalConfirmProps {
  content: string | ReactElement
  actionText: string
  onSubmit?: () => void
}

export const ModalConfirm: FC<ModalConfirmProps> = ({
  content,
  actionText,
  onSubmit
}) => {
  const dispatch = useDispatch()
  const handleClose = () => dispatch(resetModal())

  const handleSubmit = () => {
    handleClose()
    onSubmit && onSubmit()
  }

  return (
    <div className="modal-confirm">
      <div className="modal-confirm__body">{content}</div>
      <div className="modal-confirm__action">
        <Button type="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>{actionText}</Button>
      </div>
    </div>
  )
}
