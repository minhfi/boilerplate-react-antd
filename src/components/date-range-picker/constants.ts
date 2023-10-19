import dayjs from 'dayjs'
import { FORMAT_DATE_DASH } from 'src/constants'

interface IPreset {
  label: string
  value: (string | null)[]
}

export const PRESETS: IPreset[] = [
  {
    label: 'Today',
    value: [
      dayjs().startOf('day').format(FORMAT_DATE_DASH),
      dayjs().endOf('day').format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'Yesterday',
    value: [
      dayjs().subtract(1, 'day').startOf('day').format(FORMAT_DATE_DASH),
      dayjs().subtract(1, 'day').endOf('day').format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'Last 7 Days',
    value: [
      dayjs().add(-6, 'd').format(FORMAT_DATE_DASH),
      dayjs().format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'Last 14 Days',
    value: [
      dayjs().add(-13, 'd').format(FORMAT_DATE_DASH),
      dayjs().format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'Last 30 Days',
    value: [
      dayjs().add(-29, 'd').format(FORMAT_DATE_DASH),
      dayjs().format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'Last 90 Days',
    value: [
      dayjs().add(-89, 'd').format(FORMAT_DATE_DASH),
      dayjs().format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'This Month',
    value: [
      dayjs().startOf('month').format(FORMAT_DATE_DASH),
      dayjs()
        .startOf('month')
        .add(dayjs().date() - 1, 'day')
        .format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'Last Month',
    value: [
      dayjs().subtract(1, 'month').startOf('month').format(FORMAT_DATE_DASH),
      dayjs().subtract(1, 'month').endOf('month').format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'This Year',
    value: [
      dayjs().startOf('year').format(FORMAT_DATE_DASH),
      dayjs()
        .startOf('month')
        .add(dayjs().date() - 1, 'day')
        .format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'Last Year',
    value: [
      dayjs().subtract(1, 'year').startOf('year').format(FORMAT_DATE_DASH),
      dayjs().subtract(1, 'year').endOf('year').format(FORMAT_DATE_DASH)
    ]
  },
  {
    label: 'All Time',
    value: ['2020-01-01', dayjs().format(FORMAT_DATE_DASH)]
  }
]

export const DATE_RANGE_PRESET = {
  today: PRESETS[0].value,
  yesterday: PRESETS[1].value,
  last7Days: PRESETS[2].value,
  last14Days: PRESETS[3].value,
  last30Days: PRESETS[4].value,
  last90Days: PRESETS[5].value,
  thisMonth: PRESETS[6].value,
  lastMonth: PRESETS[7].value,
  thisYear: PRESETS[8].value,
  lastYear: PRESETS[9].value,
  allTime: PRESETS[10].value
}
