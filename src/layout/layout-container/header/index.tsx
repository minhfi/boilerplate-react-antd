import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'src/components/button'
import { AUTH_LOGOUT } from 'src/store/types'
import './style.scss'

const Header:FC = () => {
  const dispatch = useDispatch()

  const handleLogout = () => dispatch({ type: AUTH_LOGOUT })

  return (
    <section className="header">
      <div className="heading-5">Page title</div>
      <Button type="link" onClick={handleLogout}>Logout</Button>
    </section>
  )
}

export default Header
