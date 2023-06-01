import { FC } from 'react'
import { Modal as ModalAntd } from 'antd'
import { getLayoutIsLoading, getModal } from 'src/store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { resetModal } from 'src/store/actions'
import { IconClose } from 'src/assets/icons'
import './style.scss'

export const Modal: FC = () => {
  const dispatch = useDispatch()
  const modal = useSelector(getModal)
  const loading = useSelector(getLayoutIsLoading)

  const handleClose = () => {
    if (loading) return
    return dispatch(resetModal())
  }

  return (
    <ModalAntd className="modal" onCancel={handleClose} open={!!modal.open}>
      <div className="relative">
        <div className="modal-icon__close">
          <IconClose onClick={handleClose}/>
        </div>
        {modal.content}
      </div>
    </ModalAntd>
  )
}
