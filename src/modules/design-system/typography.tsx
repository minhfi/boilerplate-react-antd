import { FC } from 'react'

export const TypographyUI:FC = () => {
  return (
    <div style={{ marginTop: '24px' }}>
      <div className="heading-5">Typography</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          marginTop: '16px',
          gap: '16px'
        }}
      >
        <div className="heading-5">heading5</div>
        <div className="heading-6">heading6</div>
        <div className="subtitle-1">subtitle1</div>
        <div className="subtitle-2">subtitle2</div>
        <div className="body-1">body1</div>
        <div className="body-2">body2</div>
      </div>
    </div>

  )
}
