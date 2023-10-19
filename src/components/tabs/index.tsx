import { FC, ReactElement } from 'react'
import { Tabs as TabsBasic, TabsProps } from 'antd'
import { useHistory } from 'react-router'
import './style.scss'
import { Colors } from 'src/constants/theme'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Popover } from '../popover'

export enum ETabSize {
  LARGE = 'large',
  MIDDLE = 'middle'
}

interface ITab {
  key: string
  label: string
  count?: ReactElement | number
  popoverContent?: string | ReactElement
}

interface ITabs extends Omit<TabsProps, 'items' | 'onChange'> {
  activeKey: string
  items: ITab[]
  size?: ETabSize
  onChange?: (activeKey: string) => void
}

export const Tabs: FC<ITabs> = ({ items, activeKey, size, ...props }) => {
  const history = useHistory()

  const onChange = (activeKey: string) => {
    if (props.onChange) {
      return props.onChange(activeKey)
    }

    return history.push(activeKey)
  }

  return (
    <TabsBasic
      {...props}
      size={size}
      className="tabs"
      activeKey={activeKey}
      onChange={onChange}
      items={items.map((item, index) => {
        const isActive = activeKey === item.key
        return {
          label: (
            <div
              className={`tabs-items ${isActive ? 'active' : ''}`}
              key={index}
            >
              <span>{item.label}</span>

              {item.popoverContent && (
                <Popover content={item.popoverContent}>
                  <InfoCircleOutlined
                    style={{ color: Colors.gray550 }}
                    className="cursor-help ml-4"
                  />
                </Popover>
              )}

              {item.count !== undefined && (
                <span className="tabs-count">{item.count}</span>
              )}
            </div>
          ),
          key: item.key
        }
      })}
    />
  )
}

Tabs.defaultProps = {
  size: ETabSize.LARGE
}
