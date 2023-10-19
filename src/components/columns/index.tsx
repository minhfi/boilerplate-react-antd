import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from 'src/store/actions'
import { IGroupField } from 'src/interfaces'
import { Button } from '../button'
import { ColumnsContent } from './content'
import './style.scss'
import { SettingOutlined } from '@ant-design/icons'

export interface IColumnsProps {
  width?: number
  options: IGroupField[]
  onShowColumns: (options: IGroupField[]) => void
}

export const Columns: FC<IColumnsProps> = ({ width, options, onShowColumns }) => {
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    dispatch(
      setModal({
        open: true,
        title: 'Columns',
        width: width,
        content: <ColumnsContent options={options} onShowColumns={onShowColumns}/>
      })
    )
  }

  return (
    <Button
      type="text"
      icon={<SettingOutlined/>}
      className="columns"
      onClick={handleOpenModal}
    >
      Columns
    </Button>
  )
}
