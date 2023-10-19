import { FC } from 'react'
import { Button } from 'src/components/button'
import { ENotify } from 'src/constants/enum'
import { notify } from 'src/utils/notify.util'

export const NotificationUI:FC = () => {
  const handleNotify = (type: boolean) => {
    if (type) {
      return notify({
        type: ENotify.SUCCESS,
        message: 'Test success'
      })
    }

    return notify({
      type: ENotify.ERROR,
      message: 'Test error'
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="heading-5">Noti</div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Button onClick={() => handleNotify(true)}>Submit success</Button>
        <Button onClick={() => handleNotify(false)}>Submit fail</Button>
      </div>
    </div>
  )
}
