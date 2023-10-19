import { FC, useMemo, useState } from 'react'
import { Pagination, Table as TableBasic } from 'antd'
import { ColumnType } from 'antd/es/table'
import { IOption, IGroupField, TChangeEventSelect } from 'src/interfaces'
import { Select } from '../select'
import './style.scss'

interface ITableGroup<T = any> {
  bordered?: boolean
  isShowPageSize?: boolean
  loading?: boolean
  page: number
  limit: number
  total: number
  columns: ColumnType<T>[]
  columnsTable?: IGroupField[]
  data: T[]
  loadPage: (page: number, pageSize: number) => void
  selectedRows?: T[]
  onSelected?: (record: T[]) => void
}

export const TableGroup: FC<ITableGroup> = ({
  bordered = true,
  isShowPageSize = true,
  loading = false,
  page = 1,
  limit = 10,
  total = 0,
  data = [],
  columns,
  columnsTable,
  loadPage,
  selectedRows = [],
  onSelected,
  ...props
}) => {
  const [pageSize, setPageSize] = useState<number>(limit)

  const options: IOption[] = [
    { label: 10, value: 10 },
    { label: 25, value: 25 },
    { label: 50, value: 50 },
    { label: 100, value: 100 }
  ]

  const handleChangePageSize = (value: TChangeEventSelect) => {
    const pageSize = Number(value)

    if (pageSize) {
      setPageSize(pageSize)
      loadPage(1, pageSize)
    }
  }

  const COLUMNS = useMemo(() => {
    if (columnsTable?.length) {
      const columnsTableMap = columnsTable.reduce(
        (result: IOption[], item: IGroupField) => {
          return [...result, ...item.options.filter(({ checked }) => checked)]
        },
        []
      )

      const result = columns.filter((item) =>
        columnsTableMap.some(
          ({ value }) => value === item.key || item.key === 'action'
        )
      )
      return result
    }

    return columns
  }, [columnsTable, columns])

  return (
    <div className="table-group">
      <TableBasic
        {...props}
        pagination={false}
        loading={loading}
        columns={COLUMNS}
        dataSource={data}
        scroll={{ x: true }}
        expandable={{
          expandedRowRender: (record) => (
            <TableBasic
              {...props}
              showHeader={false}
              pagination={false}
              loading={loading}
              columns={COLUMNS}
              dataSource={data}
              scroll={{ x: true }}
              locale={{
                emptyText: 'There are no records to display.'
              }}
              rowSelection={
                onSelected
                  ? {
                      type: 'checkbox',
                      selectedRowKeys: selectedRows.map(({ id }) => id),
                      onChange: (record, selectedRows) =>
                        onSelected(selectedRows)
                    }
                  : undefined
              }
            />
          )
        }}
        locale={{
          emptyText: 'There are no records to display.'
        }}
        rowSelection={
          onSelected
            ? {
                type: 'checkbox',
                selectedRowKeys: selectedRows.map(({ id }) => id),
                onChange: (record, selectedRows) => onSelected(selectedRows)
              }
            : undefined
        }
      />

      {total > 10 && isShowPageSize && (
        <div className="table-pagination">
          <Pagination
            current={page}
            pageSize={limit}
            total={total}
            onChange={(page: number, pageSize: number) =>
              loadPage(page, pageSize)}
          />

          <div className="table-pagination__show">
            <div>Show:</div>
            <Select
              mb="0"
              width={75}
              value={pageSize}
              options={options}
              placeholder=""
              onChange={handleChangePageSize}
            />
          </div>
        </div>
      )}
    </div>
  )
}
