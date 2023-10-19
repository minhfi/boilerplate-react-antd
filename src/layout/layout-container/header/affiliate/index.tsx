import { ComponentProps, FC, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Dropdown, Menu } from 'antd'
import { GlobalOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { getLayoutPageTitle, getProfile } from 'src/store/selectors'
import { getFirstCharactersOfWords, getFullName } from 'src/utils/user.utils'
import avatar from 'src/assets/images/manager_default.svg'
import { EShapeImage, Image } from 'src/components/image'
import { Tooltip } from 'src/components/tooltip'
import { Colors } from 'src/constants/theme'
import * as types from 'src/store/types'
import './style.scss'

const HeaderAffiliate: FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(getProfile)
  const pageTitle = useSelector(getLayoutPageTitle)

  const handleRedirect = (path?: string) => path && history.push(path)

  const handleLogout = () => dispatch({ type: types.AUTH_LOGOUT })

  const dropdownItems = useMemo<ComponentProps<typeof Menu>['items']>(
    () => [
      {
        key: 'profile',
        label: 'Profile',
        icon: <UserOutlined/>,
        onClick: () => handleRedirect('/profile')
      },
      {
        key: 'language',
        label: 'Language',
        icon: <GlobalOutlined/>
      },
      {
        key: 'log-out',
        label: 'Log out',
        icon: <LogoutOutlined/>,
        onClick: handleLogout
      }
    ],
    []
  )

  const PAGE_TITLE = useMemo(() => {
    if (typeof pageTitle === 'string') {
      return <div className="heading-6">{pageTitle}</div>
    }

    return (
      <div className="fx fx-ai-baseline gap-16">
        {pageTitle?.map(({ title, path }, index) => {
          const lastIndex = pageTitle?.length === index + 1

          return (
            <div key={title} className="fx fx-ai-baseline gap-4">
              <div
                key={title}
                onClick={() => handleRedirect(path)}
                className={lastIndex ? 'heading-6' : 'cursor-pointer f-medium'}
                style={{ color: lastIndex ? Colors.gray900 : Colors.gray800 }}
              >
                {title}
              </div>
              {!lastIndex && <div className="f-medium">/</div>}
            </div>
          )
        })}
      </div>
    )
  }, [pageTitle])

  return (
    <>
      <div>{PAGE_TITLE}</div>
      <div className="fx fx-ai-center gap-16">
        <Dropdown
          menu={{
            items: dropdownItems,
            className: 'header-dropdown'
          }}
          trigger={['click']}
        >
          <div className="fx fx-ai-center cursor-pointer gap-8">
            <Tooltip
              overlayInnerStyle={{ fontSize: '12px' }}
              placement="bottom"
              title="My Account"
            >
              <>
                <Image
                  size={38}
                  shape={EShapeImage.CIRCLE}
                  src={user?.imageUrl || avatar}
                >
                  {!user?.imageUrl &&
                    getFirstCharactersOfWords(user?.firstName, user?.lastName)}
                </Image>
              </>
            </Tooltip>
            <div className="fx fx-column">
              <div className="f-medium mb-4">
                {getFullName(user?.firstName, user?.lastName)}
              </div>
              <Tooltip
                overlayInnerStyle={{ fontSize: '12px' }}
                placement="bottom"
                title={user?.role.name}
              >
                <div style={{ color: Colors.gray800 }}>
                  {user?.role.name} #{user?.id}
                </div>
              </Tooltip>
            </div>
          </div>
        </Dropdown>
      </div>
    </>
  )
}

export default HeaderAffiliate
