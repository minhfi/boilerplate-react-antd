import { ERole, EStatus } from './enum'
import { Colors } from './theme'

export const AUTH_FALLBACK_KEY = '_fall_back_url'

// extension
export const IMAGE_EXTENSIONS = 'image/png,image/jpeg,image/gif'
export const FILE_EXTENSIONS = '.csv'

// date time
export const FORMAT_DATE = 'DD.MM.YYYY'
export const FORMAT_DATE_TIME = 'DD.MM.YYYY HH:mm:ss'
export const FORMAT_DATE_DASH = 'YYYY-MM-DD'
export const FORMAT_DATE_TIME_DASH = 'YYYY-MM-DD HH:mm:ss'

// currency
export const CURRENCY_SYMBOL_DEFAULT = '$'
export const CURRENCY_UNIT = {
  USD: 'USD'
}

// role
export const ROLE = {
  [ERole.ADMIN]: 'Admin',
  [ERole.AFFILIATE]: 'Affiliate'
}

// status
export const STATUS_COLOR = {
  [EStatus.ALL]: Colors.white,
  [EStatus.STATUS]: Colors.gray600,
  [EStatus.DRAFT]: Colors.gray800,
  [EStatus.APPROVED]: Colors.green,
  [EStatus.ACTIVE]: Colors.green,
  [EStatus.PENDING]: Colors.orange300,
  [EStatus.TESTING]: Colors.orange300,
  [EStatus.INACTIVE]: Colors.red500,
  [EStatus.ENABLED]: Colors.green,
  [EStatus.DISABLED]: Colors.red500,
  [EStatus.REJECTED]: Colors.red500,
  [EStatus.TRASH]: Colors.red500,
  [EStatus.PROCESSING]: Colors.orange300,
  [EStatus.COMPLETED]: Colors.green,
  [EStatus.FAILED]: Colors.red500,
  [EStatus.UNPAID]: Colors.red500,
  [EStatus.PAID]: Colors.green
}

export const STATUS_TEXT = {
  [EStatus.ALL]: 'All',
  [EStatus.STATUS]: 'Status',
  [EStatus.DRAFT]: 'Draft',
  [EStatus.APPROVED]: 'Approved',
  [EStatus.ACTIVE]: 'Active',
  [EStatus.PENDING]: 'Pending',
  [EStatus.TESTING]: 'Testing',
  [EStatus.INACTIVE]: 'Inactive',
  [EStatus.ENABLED]: 'Enabled',
  [EStatus.DISABLED]: 'Disabled',
  [EStatus.REJECTED]: 'Rejected',
  [EStatus.TRASH]: 'Trash',
  [EStatus.PROCESSING]: 'Processing',
  [EStatus.COMPLETED]: 'Completed',
  [EStatus.FAILED]: 'Failed',
  [EStatus.UNPAID]: 'Unpaid',
  [EStatus.PAID]: 'Paid'
}
