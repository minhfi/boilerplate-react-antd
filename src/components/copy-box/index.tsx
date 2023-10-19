import { FC } from 'react'
import { CopyOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { notify } from 'src/utils/notify.util'
import { ENotify } from 'src/constants/enum'
import { Colors } from 'src/constants/theme'
import './style.scss'

export interface ICopyBoxProps {
  text: string
  message: string
  note?: string
}

export const CopyBox: FC<ICopyBoxProps> = (props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.text)
    notify({
      type: ENotify.SUCCESS,
      message: props.message
    })
  }

  return (
    <div className="copy-box">
      <div className="fx fx-ai-center fx-jc-space-between text-break-all copy-box__text">
        <span className="text-url mt-4 mb-4">{props.text}</span>
        <Button type="text" onClick={handleCopy}>
          <CopyOutlined style={{ color: Colors.gray700 }}/>
        </Button>
      </div>
      {props.note && <div className="copy-box__note meta">{props.note}</div>}
    </div>
  )
}
