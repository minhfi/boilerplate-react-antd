import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'src/components/button'
import { setLayoutDrawer } from 'src/store/actions'

export const DrawerUI:FC = () => {
  const dispatch = useDispatch()

  const handleOpenDrawer = () => {
    dispatch(setLayoutDrawer({
      open: true,
      title: 'Test drawer',
      content: 'test'
    }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="heading-5">Drawer</div>
      <Button type="default" onClick={handleOpenDrawer}>Open Drawer</Button>
    </div>
  )
}
