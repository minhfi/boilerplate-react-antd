import { FC, ReactElement } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'
import { Colors } from 'src/constants/theme'
import 'react-quill/dist/quill.snow.css'
import './style.scss'
import { Popover } from '../popover'
import { InfoCircleOutlined } from '@ant-design/icons'

export interface ITextEditorProps extends ReactQuillProps {
  label?: string
  name?: string
  required?: boolean
  error?: string
  note?: string
  mb?: string
  width?: string | number
  popoverContent?: string | ReactElement
}

export const Editor: FC<ITextEditorProps> = ({
  label,
  note,
  error,
  mb,
  required,
  popoverContent,
  ...props
}) => {
  return (
    <div className="editor" style={{ marginBottom: mb }}>
      {label && (
        <div className="fx fx-ai-center gap-4 body-2 f-medium mb-8">
          <div>{label}</div>
          {required && <div style={{ color: Colors.red }}>*</div>}
          {popoverContent && (
            <Popover content={popoverContent}>
              <InfoCircleOutlined style={{ color: Colors.gray550 }} className="cursor-help"/>
            </Popover>
          )}
        </div>
      )}

      <ReactQuill
        {...props}
        theme="snow"
        style={{ width: props.width }}
      />

      {note && (
        <div style={{ marginTop: '6px' }}>
          <div className="meta" style={{ color: Colors.gray600 }}>{note}</div>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.red }}>{error}</div>
        </div>
      )}
    </div>
  )
}

Editor.defaultProps = {
  mb: '16px'
}
