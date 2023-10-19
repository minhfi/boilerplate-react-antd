import { FC } from 'react'
import './style.scss'
import { CloseOutlined } from '@ant-design/icons'

export interface IToolBoxSelectMultiProps {
  count: number
  onReset?: () => void
}

export const ToolBoxSelectMulti: FC<IToolBoxSelectMultiProps> = ({
  count = 0,
  children,
  onReset
}) => {
  return (
    <div className="toolbox-select">
      <div className="toolbox-select__count">
        <div className="fx fx-ai-baseline gap-8">
          <div>{count}</div> <div>Selected</div>
          <div
            className="meta cursor-pointer"
            onClick={() => onReset && onReset()}
          >
            <CloseOutlined/>
          </div>
        </div>
      </div>
      <div className="fx fx-wrap-wrap gap-8">{children}</div>
    </div>
  )
}
