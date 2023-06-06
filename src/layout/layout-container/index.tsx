import { FC, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Layout } from 'antd'
import { getIsAuthenticated, getLayoutIsAside, getLayoutIsHeader, getNavigateTo } from 'src/store/selectors'
import { setLayoutAside, setLayoutHeader } from 'src/store/actions'
import { AUTH_GET_PROFILE } from 'src/store/types'
import Header from './header'
import Aside from './aside'
import './style.scss'

export const LayoutContainer: FC = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const navigateTo = useSelector(getNavigateTo)
  const isHeader = useSelector(getLayoutIsHeader)
  const isAside = useSelector(getLayoutIsAside)
  const isAuthenticated = useSelector(getIsAuthenticated)

  // navigate route in redux
  useEffect(() => {
    if (navigateTo) {
      history.push(navigateTo)
    }
  }, [navigateTo, history])

  // load profile
  useEffect(() => {
    if (isAuthenticated) {
      dispatch({ type: AUTH_GET_PROFILE })
    }
  }, [])

  useLayoutEffect(() => {
    dispatch(setLayoutHeader(!!isAuthenticated))
    dispatch(setLayoutAside(!!isAuthenticated))
  }, [isAuthenticated])

  return (
    <Layout className="layout-container">
      {isAside && <Aside/>}
      <div className="layout-content">
        {isHeader && <Header/>}
        <Layout.Content className="layout-content__child">
          {props.children}
        </Layout.Content>
      </div>
    </Layout>
  )
}
