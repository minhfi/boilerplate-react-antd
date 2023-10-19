import { FC } from 'react'
import { Drawer as DrawerBasic } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { resetLayoutDrawer } from 'src/store/actions'
import { getLayoutDrawer } from 'src/store/selectors'
import './style.scss'

export const Drawer: FC = () => {
  const dispath = useDispatch()
  const { title, open, content } = useSelector(getLayoutDrawer)

  const handleClose = () => dispath(resetLayoutDrawer())

  return (
    <DrawerBasic
      open={open}
      width={600}
      title={title}
      className="drawer"
      placement="right"
      maskClosable={false}
      onClose={handleClose}
    >
      {content}
    </DrawerBasic>
  )
}
