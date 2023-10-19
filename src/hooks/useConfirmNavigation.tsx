import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { ModalConfirm } from 'src/components/modal-confirm'
import { setModal } from 'src/store/actions'

const useConfirmNavigation = (
  confirmCondition: boolean,
  onSubmit?: () => void
) => {
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [shouldConfirm, setShouldConfirm] = useState(false)

  const handleChangePathName = (nextPathName: string) => {
    dispatch(
      setModal({
        open: true,
        title: 'Are you sure?',
        content: (
          <ModalConfirm
            content="Your changes may not be saved."
            actionText="Leave"
            onSubmit={() => {
              setShouldConfirm(true)
              onSubmit && onSubmit()
              setTimeout(() => {
                history.push(nextPathName)
              }, 100)
            }}
          />
        )
      })
    )
  }

  useEffect(() => {
    const unblock = history.block((nextLocation) => {
      if (
        nextLocation.pathname !== location.pathname &&
        !shouldConfirm &&
        confirmCondition
      ) {
        handleChangePathName(nextLocation.pathname)
        return false
      }
    })

    return () => {
      unblock()
    }
  }, [
    history,
    location,
    shouldConfirm,
    handleChangePathName,
    confirmCondition
  ])
}

export default useConfirmNavigation
