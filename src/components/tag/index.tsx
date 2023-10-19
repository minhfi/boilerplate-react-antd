import { FC, ReactElement } from 'react'
import { Tag as TagBasic, TagProps } from 'antd'
import './style.scss'

interface ITag extends TagProps {
  label: string | number | null | ReactElement
}

export const Tag: FC<ITag> = ({ label, color, bordered, ...props }) => {
  return (
    <TagBasic
      {...props}
      color={color}
      bordered={bordered}
      className={`tag ${color ? '' : 'override-color'}`}
    >
      {label}
    </TagBasic>
  )
}

Tag.defaultProps = {
  bordered: false
}
