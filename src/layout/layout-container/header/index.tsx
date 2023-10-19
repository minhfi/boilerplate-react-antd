import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getIsAuthenticated, getProfile } from 'src/store/selectors'
import logo from 'src/assets/images/logo.svg'
import { Image } from 'src/components/image'
import { ERole } from 'src/constants/enum'
import HeaderAffiliate from './affiliate'
import HeaderAdmin from './admin'
import './style.scss'

const Header: FC = () => {
  const history = useHistory()
  const user = useSelector(getProfile)
  const isAuthenticated = useSelector(getIsAuthenticated)

  // check role to render header
  const HEADER = useMemo(() => {
    switch (user?.role.code) {
      case ERole.AFFILIATE:
        return <HeaderAffiliate/>

      default:
        return <HeaderAdmin/>
    }
  }, [user?.role])

  return (
    <section className="header">
      {isAuthenticated
        ? (
            HEADER
          )
        : (
          <div onClick={() => history.push('/')} className="cursor-pointer">
            <Image src={logo} size={50} alt="logo"/>
          </div>
          )}
    </section>
  )
}

export default Header
