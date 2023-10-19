import { FC } from 'react'
import { Tooltip as TooltipBasic } from 'antd'
import { TooltipProps as TooltipBasicProps } from 'antd/lib/tooltip'
import './style.scss'

interface ITooltipProps {
  fontSize?: number
}

export const Tooltip: FC<ITooltipProps & TooltipBasicProps> = (props) => {
  return (
    <TooltipBasic
      {...props}
      overlayInnerStyle={{ fontSize: props.fontSize }}
      className="tooltip"
    >
      <div className="fx fx-ai-center">{props.children}</div>
    </TooltipBasic>
  )
}

Tooltip.defaultProps = {
  fontSize: 12
}
