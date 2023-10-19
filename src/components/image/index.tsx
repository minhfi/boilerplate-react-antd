import { FC } from 'react'
import { Avatar } from 'antd'
import ImageDefault from 'src/assets/images/image-default.svg'

export enum EShapeImage {
  SQUARE = 'square',
  CIRCLE = 'circle'
}

interface ImageProps {
  src?: string | null
  size?: number
  shape?: EShapeImage
  alt?: string
}

export const Image: FC<ImageProps> = ({ src, size, shape, ...props }) => {
  if (!src && props.children) {
    return (
      <Avatar
        {...props}
        shape={shape}
        size={size}
        className="image"
        style={{ minWidth: size }}
      >
        {props.children?.toString()?.toUpperCase()}
      </Avatar>
    )
  }

  return (
    <Avatar
      {...props}
      shape={shape}
      size={size}
      src={src || ImageDefault}
      className="image"
      style={{ minWidth: size }}
    />
  )
}

Image.defaultProps = {
  size: 64,
  shape: EShapeImage.SQUARE
}
