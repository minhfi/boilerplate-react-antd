import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getProfile } from 'src/store/selectors'
import { ERole } from 'src/constants/enum'
import AsideAffiliate from './affiliate'
import AsideAdmin from './admin'

const Aside: FC = () => {
  const user = useSelector(getProfile)

  // check role to render aside
  const ASIDES = useMemo(() => {
    switch (user?.role.code) {
      case ERole.AFFILIATE:
        return <AsideAffiliate/>

      default:
        return <AsideAdmin/>
    }
  }, [user?.role])

  return ASIDES
}

export default Aside
