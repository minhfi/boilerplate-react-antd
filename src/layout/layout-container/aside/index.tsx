import { FC, useEffect, useMemo, useState } from 'react'
import { useHistory } from 'react-router'
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import './style.scss'

const Aside: FC = () => {
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState(history.location.pathname)

  const handleRedirect = (e: any) => e.key && history.push(e.key)

  const ITEMS = useMemo(() => {
    return [
      {
        key: '/home',
        icon: <PieChartOutlined/>,
        label: 'Home'
      },
      {
        key: '/design-system',
        icon: <DesktopOutlined/>,
        label: 'Design system'
      },
      {
        key: '3',
        icon: <UserOutlined/>,
        label: 'nav 3',
        children: [
          {
            key: '/123',
            label: 'nav 1'
          },
          {
            key: '/456',
            label: 'nav 2'
          }
        ]
      }
    ]
  }, [])

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

  return (
    <Layout.Sider
      width={300}
      className="aside"
      collapsible
      collapsed={collapsed}
      onCollapse={(value: boolean) => setCollapsed(value)}
    >
      <div className="aside-header">TEMPLATE</div>
      <Menu
        theme="dark"
        defaultSelectedKeys={[history.location.pathname]}
        selectedKeys={[selectedKeys]}
        mode="inline"
        items={ITEMS}
        onClick={handleRedirect}
      />
    </Layout.Sider>
  )
}

export default Aside
