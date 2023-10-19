import { FC, useEffect, useState } from 'react'
import { Button } from '../button'
import { IExportProps } from '.'
import { useDispatch } from 'react-redux'
import { resetModal } from 'src/store/actions'
import { RadioGroup } from '../radio-group'
import { RadioChangeEvent } from 'antd'

export enum ETypeExport {
  XLS = 'xls',
  CSV = 'csv'
}

export const ExportContent: FC<IExportProps> = ({ options, onExport }) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<ETypeExport>(ETypeExport.XLS)

  const handleClose = () => dispatch(resetModal())

  const handleChangeFile = (event:RadioChangeEvent) => {
    const { value } = event.target
    setValue(value)
  }

  useEffect(() => {
    if (options.length) {
      const value: ETypeExport = options.find(({ checked }) => checked)?.value as ETypeExport
      setValue(value)
    }
  }, [options])

  return (
    <div className="export-content">
      <div className="export-content__body">
        <div>File Format</div>
        <div>
          <RadioGroup value={value} options={options} onChange={handleChangeFile}/>
        </div>
      </div>
      <div className="export-content__action">
        <Button type="text" onClick={handleClose}>Close</Button>
        <Button onClick={() => onExport(value)}>Export</Button>
      </div>
    </div>
  )
}
