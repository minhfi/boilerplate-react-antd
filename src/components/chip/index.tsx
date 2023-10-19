import { FC } from 'react'
import { truncate } from 'src/utils/helpers.utils'
import { EShapeImage, Image } from '../image'
import './style.scss'

interface IChipProps {
  imageUrl?: string
  label?: string
}

export const Chip: FC<IChipProps> = ({ imageUrl, label }) => {
  return (
    <div className="fx fx-ai-center gap-8 chip">
      <Image src={imageUrl} shape={EShapeImage.CIRCLE} size={20}>
        {label}
      </Image>
      <div>{truncate(label, 20)}</div>
    </div>
  )
}
