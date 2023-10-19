import moment from 'moment-timezone'
import { FORMAT_DATE } from 'src/constants'
import { IAuthState } from 'src/store/types'
import { store } from 'src/store'

export const calculateMinutesAgo = (lastUpdated: Date): number => {
  const currentTime = new Date()
  const diffInMilliseconds = currentTime.getTime() - lastUpdated.getTime()
  const diffInMinutes = Math.floor(diffInMilliseconds / 60000) // 1 minute = 60,000 milliseconds
  return diffInMinutes
}

export const convertSecondsToTime = (totalSeconds: number): string => {
  if (totalSeconds < 0) return '00:00:00'

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const formattedHours = hours.toString().padStart(2, '0')
  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

export const convertDateTimeUTCToTz = (date?: string | null, format = FORMAT_DATE) => {
  if (!date) return null

  const timeZone =
    (store.getState()?.auth as IAuthState)?.profile?.timezone?.value ||
    'Asia/Bangkok'

  return moment(date).tz(timeZone).format(format)
}

export const convertDateTimeTzToUTC = (
  date?: string | null,
  option?: {
    startOfDay?: boolean
    endOfDay?: boolean
  }
) => {
  if (!date) return null

  const timeZone =
    (store.getState()?.auth as IAuthState)?.profile?.timezone?.value ||
    'Asia/Bangkok'

  if (option?.startOfDay) {
    return moment.tz(date, timeZone).startOf('day').utc().toISOString()
  }

  if (option?.endOfDay) {
    return moment.tz(date, timeZone).endOf('day').utc().toISOString()
  }

  return moment.tz(date, timeZone).utc().toISOString()
}
