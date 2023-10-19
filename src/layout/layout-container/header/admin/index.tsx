import { ComponentProps, FC, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { Dropdown, Menu } from 'antd'
import {
  CalendarOutlined,
  CodepenCircleOutlined,
  GlobalOutlined,
  LogoutOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  UserOutlined
} from '@ant-design/icons'
import { getFirstCharactersOfWords, getFullName } from 'src/utils/user.utils'
import { getLayoutPageTitle, getProfile } from 'src/store/selectors'
import { EShapeImage, Image } from 'src/components/image'
import { Tooltip } from 'src/components/tooltip'
import { Colors } from 'src/constants/theme'
import * as types from 'src/store/types'
import './style.scss'

const HeaderAdmin: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(getProfile)
  const pageTitle = useSelector(getLayoutPageTitle)

  const handleRedirect = (path?: string) => path && history.push(path)

  const handleLogout = () => dispatch({ type: types.AUTH_LOGOUT })

  const dropdownItems = useMemo<ComponentProps<typeof Menu>['items']>(
    () => [
      {
        key: 'profile',
        label: 'Profile',
        icon: <UserOutlined/>
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

  const dropInfor = useMemo<ComponentProps<typeof Menu>['items']>(
    () => [
      {
        key: 'helpSite',
        label: 'Help Site',
        icon: <QuestionCircleOutlined/>,
        onClick: () => {
          window.location.href = '/'
        }
      },
      {
        key: 'api-doc',
        label: 'API Doc',
        icon: <GlobalOutlined/>,
        onClick: () => {
          window.location.href = '/'
        }
      },
      {
        key: 'feature-roadmap',
        label: 'Feature Roadmap',
        icon: <CalendarOutlined/>,
        onClick: () => {
          window.location.href = '/'
        }
      },
      {
        key: 'suggest-feature',
        label: 'Suggest a Feature',
        icon: <LogoutOutlined/>,
        onClick: () => {
          window.location.href = '/'
        }
      },
      {
        key: 'new',
        label: "What's new?",
        icon: <NotificationOutlined/>,
        onClick: () => {
          window.location.href = '/'
        }
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
                className={lastIndex ? 'heading-6' : 'body-2 cursor-pointer f-medium'}
                style={{ color: lastIndex ? Colors.gray900 : Colors.gray800 }}
              >
                {title}
              </div>
              {!lastIndex && <div className="body-2 f-medium">/</div>}
            </div>
          )
        })}
      </div>
    )
  }, [pageTitle])

  return (
    <>
      <div className="heading-6">{PAGE_TITLE}</div>
      <div className="fx fx-ai-center gap-16">
        <Dropdown
          menu={{
            items: dropInfor,
            className: 'header-dropdown header-dropdown__info'
          }}
          trigger={['click']}
        >
          <CodepenCircleOutlined className="custom-icon"/>
        </Dropdown>

        <Dropdown
          menu={{ items: dropdownItems, className: 'header-dropdown' }}
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
                  src={user?.imageUrl}
                >
                  {getFirstCharactersOfWords(user?.firstName, user?.lastName)}
                </Image>
              </>
            </Tooltip>
            <div className="fx fx-column">
              <div className="f-medium">
                {getFullName(user?.firstName, user?.lastName)}
              </div>
              <Tooltip
                overlayInnerStyle={{ fontSize: '12px' }}
                placement="bottom"
                title={user?.role.name}
              >
                <div style={{ color: Colors.gray800 }}>{user?.role.name}</div>
              </Tooltip>
            </div>
          </div>
        </Dropdown>
      </div>
    </>
  )
}

export default HeaderAdmin
