import { FC } from 'react'
import { Modal as ModalAntd } from 'antd'
import { getModal } from 'src/store/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { resetModal } from 'src/store/actions'
import './style.scss'

export const Modal: FC = () => {
  const dispatch = useDispatch()
  const { title, open, content, width } = useSelector(getModal)

  const handleClose = () => dispatch(resetModal())

  return (
    <ModalAntd
      maskClosable={false}
      className="modal"
      centered
      width={width}
      open={open}
      title={title}
      onCancel={handleClose}
    >
      {content}
    </ModalAntd>
  )
}
