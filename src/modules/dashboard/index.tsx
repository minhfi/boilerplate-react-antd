import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDocumentTitle } from 'src/hooks/useDocumentTitle'
import { setLayoutPageTitle } from 'src/store/actions'

export const Dashboard:FC = () => {
  const dispatch = useDispatch()

  useDocumentTitle('Dashboard | Affscale')

  useEffect(() => {
    Promise.all([
      dispatch(setLayoutPageTitle('Dashboard'))
    ])
  }, [])

  return (
    <>Dashboard</>
  )
}
