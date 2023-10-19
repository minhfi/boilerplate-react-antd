import { FC, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Divider, Layout, Menu } from 'antd'
import { MenuOutlined, WindowsOutlined } from '@ant-design/icons'
import { convertKeyActive } from 'src/utils/helpers.utils'
import { getLayoutIsOpenMenu } from 'src/store/selectors'
import { LAYOUT_SET_OPEN_MENU } from 'src/store/types'
import Logo from 'src/assets/images/logo.png'
import './style.scss'

const AsideAffiliate: FC = () => {
  const history = useHistory()
  const disptach = useDispatch()
  const isOpenMenu = useSelector(getLayoutIsOpenMenu)

  const [selectedKeys, setSelectedKeys] = useState(history.location.pathname)

  const handleCollapsedMenu = (value: boolean) => {
    disptach({
      type: LAYOUT_SET_OPEN_MENU,
      value
    })
  }

  const handleRedirect = ({ item }: any) => {
    item.props?.path && history.push(item.props.path)
  }

  useEffect(() => {
    if (history.location.pathname) {
      setSelectedKeys(history.location.pathname)
    }

    history.listen((location) => {
      if (history.location.pathname) {
        setSelectedKeys(history.location.pathname)
      }
    })
  }, [history])

  const KEYACTIVE = useMemo(
    () => convertKeyActive(selectedKeys),
    [selectedKeys]
  )

  const MENUS = useMemo(() => {
    return [
      {
        title: '',
        children: [
          {
            key: 'dashboard',
            path: '/dashboard',
            icon: <WindowsOutlined/>,
            label: 'Dashboard'
          }
        ]
      }
    ]
  }, [])

  return (
    <Layout.Sider
      width={250}
      className="aside-affiliate"
      collapsible
      collapsed={isOpenMenu}
      onCollapse={handleCollapsedMenu}
    >
      <div
        className="aside-affiliate__header"
        style={{ paddingLeft: isOpenMenu ? '30px' : '20px' }}
      >
        <MenuOutlined onClick={() => handleCollapsedMenu(!isOpenMenu)}/>
        <img
          src={Logo}
          alt="logo"
          style={{
            opacity: !isOpenMenu ? '1' : '0'
          }}
        />
      </div>
      <div className="aside-affiliate__content">
        {MENUS.map((menu, index) => (
          <div key={index}>
            {menu.title && (
              <div>
                {!isOpenMenu
                  ? (
                    <span className="meta custom-subtitle">{menu.title}</span>
                    )
                  : (
                    <Divider className="line-sub"/>
                    )}
              </div>
            )}

            <Menu
              theme="dark"
              defaultSelectedKeys={[history.location.pathname]}
              selectedKeys={[KEYACTIVE]}
              mode="inline"
              items={menu.children}
              onClick={handleRedirect}
            />
          </div>
        ))}
      </div>
    </Layout.Sider>
  )
}

export default AsideAffiliate
