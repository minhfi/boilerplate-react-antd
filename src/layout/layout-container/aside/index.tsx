import { FC, useMemo, useState } from 'react'
import { useHistory } from 'react-router'
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import './style.scss'

const Aside:FC = () => {
  const history = useHistory()
  const [collapsed, setCollapsed] = useState(false)

  const handleRedirect = (e:any) => {
    if (e.key) {
      history.push(e.key)
    }
  }

  const ITEMS = useMemo(() => {
    return [
      {
        key: '/home',
        icon: <PieChartOutlined/>,
        label: 'Home'
      },
      {
        key: '/nav2',
        icon: <DesktopOutlined/>,
        label: 'Nav 2'
      },
      {
        key: '3',
        icon: <UserOutlined/>,
        label: 'nav 3',
        children: [
          {
            key: '/123',
            icon: <PieChartOutlined/>,
            label: 'nav 1'
          },
          {
            key: '/456',
            icon: <DesktopOutlined/>,
            label: 'nav 2'
          }
        ]
      }
    ]
  }, [])

  return (
    <Layout.Sider width={300} className="aside" collapsible collapsed={collapsed} onCollapse={(value:boolean) => setCollapsed(value)}>
      <div className="aside-header">
        TEMPLATE
      </div>
      <Menu theme="dark" defaultSelectedKeys={[history.location.pathname]} mode="inline" items={ITEMS} onClick={handleRedirect}/>
    </Layout.Sider>
  )
}

export default Aside
