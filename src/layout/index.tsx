import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getModal } from 'src/store/selectors'
import { Loading } from 'src/components/loading'
import { Modal } from 'src/components/modal'

import { RouterView } from './router-view'

export const AppLayout: FC = () => {
  const appModal = useSelector(getModal)

  return (
    <section className="layout">
      <main className="layout-main">
        <RouterView/>
      </main>

      {appModal.open && <Modal/>}
      <Loading/>
    </section>
  )
}
