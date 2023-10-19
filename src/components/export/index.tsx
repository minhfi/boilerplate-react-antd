import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from 'src/store/actions'
import { IOption } from 'src/interfaces'
import { Button } from '../button'
import { DownloadOutlined } from '@ant-design/icons'
import { ETypeExport, ExportContent } from './content'
import './style.scss'
export interface IExportProps {
  options: IOption[]
  onExport: (val: ETypeExport) => void
  title?: string
}

export const Export: FC<IExportProps> = ({ options, onExport, title }) => {
  const dispatch = useDispatch()

  const handleOpenModal = () => {
    dispatch(
      setModal({
        open: true,
        title: title,
        content: <ExportContent options={options} onExport={onExport}/>
      })
    )
  }

  return (
    <Button
      type="text"
      icon={<DownloadOutlined/>}
      className="export"
      onClick={handleOpenModal}
    >
      Export
    </Button>
  )
}
