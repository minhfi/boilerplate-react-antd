import { FC, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'src/components/button'
import { setModal } from 'src/store/actions'

export const ShowColumnUI:FC = () => {
  const dispatch = useDispatch()

  const handleModal = () => {
    dispatch(setModal({
      open: true,
      title: 'Columns',
      content: <div>{CONTENT}</div>
    }))
  }

  const CONTENT = useMemo(() => {
    return (
      <div>
        12312
      </div>
    )
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="heading-5">Show column</div>
      <Button type="default" onClick={handleModal}>Column</Button>
    </div>
  )
}
