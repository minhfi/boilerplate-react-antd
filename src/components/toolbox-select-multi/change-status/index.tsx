import { Dropdown } from 'antd'
import { FC, useMemo, useState } from 'react'
import { CheckOutlined } from '@ant-design/icons'
import { Button } from 'src/components/button'
import { EStatus } from 'src/constants/enum'
import { IOption } from 'src/interfaces'
import './style.scss'

interface IChangeStatusProps {
  count: number
  options: EStatus[]
  onSubmit?: (val: EStatus) => void
}

export const ChangeStatus: FC<IChangeStatusProps> = ({
  count,
  onSubmit,
  ...props
}) => {
  const [status, setStatus] = useState<EStatus>()
  const [open, setOpen] = useState<boolean>(false)

  const handleApply = () => {
    if (status) {
      setOpen(false)
      onSubmit && onSubmit(status)
    }
  }

  const OPTIONS = useMemo(() => {
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
    <div className="change-status">
      <Dropdown
        trigger={['click']}
        overlayStyle={{ zIndex: '990' }}
        open={open}
        onOpenChange={setOpen}
        dropdownRender={() => {
          return (
            <div className="change-status__dropdown">
              <div className="change-status__dropdown--content">
                {OPTIONS.map((option) => {
                  const isActive = option.value === status
                  return (
                    <div
                      key={option.value}
                      className={isActive ? 'active' : ''}
                      onClick={() => setStatus(option.value as EStatus)}
                    >
                      <div className="body-2">{option.label}</div>
                      {isActive && <CheckOutlined/>}
                    </div>
                  )
                })}
              </div>
              <div className="fx fx-ai-center fx-jc-center pt-16 pb-16 pl-24 pr-24">
                <Button onClick={handleApply} block disabled={!status}>
                  Change {count} Items
                </Button>
              </div>
            </div>
          )
        }}
      >
        <div className="change-status__label">Change Status</div>
      </Dropdown>
    </div>
  )
}
