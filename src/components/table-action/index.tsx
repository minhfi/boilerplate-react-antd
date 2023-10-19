import { EllipsisOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { Children, FC } from 'react'
import { isObject } from 'src/utils/helpers.utils'
import './style.scss'

interface ITableActionProps {
  width?: string | number
}

export const TableAction: FC<ITableActionProps> = (props) => {
  return (
    <div className="table-action">
      <Dropdown
        trigger={['click']}
        overlayStyle={{ zIndex: '990' }}
        dropdownRender={() => {
          return (
            <div
              className="table-action__block"
              style={{ width: props.width }}
            >
              {isObject(props.children)
                ? (
                  <div className="table-action__block--item">{props.children}</div>
                  )
                : (
                    Children.map(props.children, (child) => <div className="table-action__block--item">{child}</div>)
                  )}
            </div>
          )
        }}
      >
        <EllipsisOutlined/>
      </Dropdown>
    </div>
  )
}
