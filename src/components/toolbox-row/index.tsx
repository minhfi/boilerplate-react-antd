import { Col, Row } from 'antd'
import { Children, FC, ReactElement } from 'react'
import { isObject } from 'src/utils/helpers.utils'

interface IColCustom {
  index: number
  col: number
}

export interface IToolBoxRowProps {
  col?: number
  gutter?: number
  children: ReactElement | ReactElement[]
  colCustom?: IColCustom | IColCustom[]
}

export const ToolboxRow: FC<IToolBoxRowProps> = ({ col, gutter, ...props }) => {
  return (
    <Row className="pt-4 pb-4" justify="space-between" gutter={gutter}>
      {isObject(props.children)
        ? (
          <Col span={col} className="body-2">
            {props.children}
          </Col>
          )
        : (
            Children.map(props.children, (child, index) => {
              if (
                Array.isArray(props.colCustom) &&
            (props.colCustom as IColCustom[])?.some(
              (item) => item.index === index
            )
              ) {
                const col = (props.colCustom as IColCustom[]).find(
                  (item) => item.index === index
                )?.col

                return (
                  <Col span={col} className="body-2">
                    {child}
                  </Col>
                )
              }

              if (
                isObject(props.colCustom) &&
            (props.colCustom as IColCustom)?.index === index
              ) {
                return (
                  <Col
                    span={(props.colCustom as IColCustom).col}
                    className="body-2"
                  >
                    {child}
                  </Col>
                )
              }

              return (
                <Col span={col} className="body-2">
                  {child}
                </Col>
              )
            })
          )}
    </Row>
  )
}

ToolboxRow.defaultProps = {
  gutter: 8,
  col: 12
}
