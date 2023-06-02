import { toast, ToastOptions } from 'react-toastify'
import { ENotify } from 'src/constants/enum'

const defaultPosition = toast.POSITION.BOTTOM_RIGHT

export const notify = (
  { type = ENotify.SUCCESS, message = '' },
  options: ToastOptions = {}
) => {
  toast[type](message, {
    position: defaultPosition,
    ...options
  })
}
