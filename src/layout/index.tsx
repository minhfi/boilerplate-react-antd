import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getLayoutIsLoading, getModal } from 'src/store/selectors'
import { Loading } from 'src/components/loading'
import { Notify } from 'src/components/notify'
import { Modal } from 'src/components/modal'

import { STContainer, STContent } from './styled'
import { RouterView } from './router-view'

export const AppLayout: FC = () => {
  const isLoading = useSelector(getLayoutIsLoading)
  const appModal = useSelector(getModal)

  return (
    <STContainer isLoading={isLoading}>
      <STContent>
        <RouterView/>
      </STContent>

      {appModal.open && <Modal/>}
      <Loading/>
      <Notify/>
    </STContainer>
  )
}
