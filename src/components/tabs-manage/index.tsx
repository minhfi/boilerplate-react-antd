import { ArrowLeftOutlined } from '@ant-design/icons'
import { FC, ReactElement } from 'react'
import { useHistory } from 'react-router'
import './style.scss'

export interface ITabsManageItem {
    path: string
    key: string
    label: string
    count: number | ReactElement
}

interface ITabsManageProps {
    goBack?: () => void
    currentPath: string
    items: ITabsManageItem[]
}

export const TabsManage:FC<ITabsManageProps> = ({ goBack, items, currentPath, ...props }) => {
  const history = useHistory()

  const handleRedirect = (path: string) => history.push(path)

  return (
    <section className="tabs-manage">
      <div className="tabs-manage__tab">
        <ArrowLeftOutlined onClick={goBack}/>
        <div className="fx fx-column gap-4">
          {items.map((item) => {
            const isActive = item.key === currentPath

            return (
              <div
                key={item.key}
                className={`tabs-manage__tab--item ${
                  isActive ? 'tabs-manage__tab--active' : ''
                }`}
                onClick={() => handleRedirect(item.path)}
              >
                <div>{item.label}</div>
                {item.count && <div>{item.count}</div>}
              </div>
            )
          })}
        </div>
      </div>

      <div className="tabs-manage__content">
        {props.children}
      </div>
    </section>
  )
}
