import { FC, ReactElement, useMemo } from 'react'
import { Select as SelectBasic, SelectProps } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Colors } from 'src/constants/theme'
import { EStatus } from 'src/constants/enum'
import { IOption } from 'src/interfaces'
import { Popover } from '../popover'
import './style.scss'

interface ISelectStatusProps
  extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
  label?: string
  required?: boolean
  error?: string | null
  mb?: string | number
  note?: string
  width?: number | string
  value: EStatus | string | null
  options?: EStatus[]
  popoverContent?: string | ReactElement
  onChange?: (value: EStatus | string) => void
}

export const SelectStatus: FC<ISelectStatusProps> = ({
  label,
  required,
  mb,
  error,
  note,
  popoverContent,
  ...props
}) => {
  const onChange = (value: EStatus | string) => {
    if (value && props.onChange) {
      props.onChange(value)
    }
  }

  const options = useMemo(() => {
    const optionsDefault: IOption[] = [
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--all"/>
            <div>All</div>
          </div>
        ),
        value: EStatus.ALL
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--status"/>
            <div>Status</div>
          </div>
        ),
        value: EStatus.STATUS
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--draft"/>
            <div>Draft</div>
          </div>
        ),
        value: EStatus.DRAFT
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--active"/>
            <div>Approved</div>
          </div>
        ),
        value: EStatus.APPROVED
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--active"/>
            <div>Active</div>
          </div>
        ),
        value: EStatus.ACTIVE
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--pending"/>
            <div>Pending</div>
          </div>
        ),
        value: EStatus.PENDING
      },
      // {
      //   label: (
      //     <div className="select-status__label">
      //       <div className="select-status__label--testing"/>
      //       <div>Testing</div>
      //     </div>
      //   ),
      //   value: EStatus.TESTING
      // },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--inactive"/>
            <div>Inactive</div>
          </div>
        ),
        value: EStatus.INACTIVE
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--inactive"/>
            <div>Reject</div>
          </div>
        ),
        value: EStatus.REJECTED
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--inactive"/>
            <div>Trash</div>
          </div>
        ),
        value: EStatus.TRASH
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--pending"/>
            <div>Processing</div>
          </div>
        ),
        value: EStatus.PROCESSING
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--active"/>
            <div>Completed</div>
          </div>
        ),
        value: EStatus.COMPLETED
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--inactive"/>
            <div>Failed</div>
          </div>
        ),
        value: EStatus.FAILED
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--active"/>
            <div>Paid</div>
          </div>
        ),
        value: EStatus.PAID
      },
      {
        label: (
          <div className="select-status__label">
            <div className="select-status__label--inactive"/>
            <div>Unpaid</div>
          </div>
        ),
        value: EStatus.UNPAID
      }
    ]

    let optionsForm: IOption[] = optionsDefault

    if (props.options?.length) {
      optionsForm = optionsDefault.filter((item: IOption) =>
        props.options?.includes(item.value as EStatus)
      )
    }

    return optionsForm
  }, [props.options])

  return (
    <div className="select-status" style={{ marginBottom: mb }}>
      {label && (
        <div className="fx fx-ai-center gap-4 body-2 f-medium mb-8">
          <div>{label}</div>
          {required && <div style={{ color: Colors.red }}>*</div>}
          {popoverContent && (
            <Popover content={popoverContent}>
              <InfoCircleOutlined
                style={{ color: Colors.gray550 }}
                className="cursor-help"
              />
            </Popover>
          )}
        </div>
      )}

      <SelectBasic
        {...props}
        options={options}
        onChange={onChange}
        status={error ? 'error' : ''}
        style={{
          width: props.width
        }}
      />

      {note && (
        <div style={{ marginTop: '6px' }}>
          <div className="meta" style={{ color: Colors.gray600 }}>
            {note}
          </div>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '8px' }}>
          <div className="body-2" style={{ color: Colors.red }}>
            {error}
          </div>
        </div>
      )}
    </div>
  )
}

SelectStatus.defaultProps = {
  mb: '16px',
  placeholder: 'Select an option'
}
