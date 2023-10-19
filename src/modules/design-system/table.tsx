import { FC, useEffect, useState } from 'react'
import { TableGroup } from 'src/components/table-group'

const columns = () => {
  return [
    {
      title: 'Name',
      key: 'a',
      dataIndex: 'a'
    },
    {
      title: 'Other',
      key: 'b',
      children: [
        {
          title: 'Age',
          dataIndex: 'b1',
          key: 'b1'
        },
        {
          title: 'Company Address',
          dataIndex: 'b2',
          key: 'b2',
          width: 200
        },
        {
          title: 'Company Name',
          dataIndex: 'b3',
          key: 'b3'
        }
      ]
    },
    {
      title: 'Other',
      key: 'c',
      children: [
        {
          title: 'Age',
          dataIndex: 'c1',
          key: 'c1'
        },
        {
          title: 'Company Address',
          dataIndex: 'c2',
          key: 'c2',
          width: 200
        },
        {
          title: 'Company Name',
          dataIndex: 'c3',
          key: 'c3'
        }
      ]
    }
  ]
}

export const TableUI: FC = () => {
  const [postBack, setPostBack] = useState<any>({
    data: [],
    page: 1,
    total: 0,
    limit: 10
  })

  const loadPostbackManage = async (page = 1, limit = 10) => {
    try {
      const a = [
        {
          a: '10324234234234234234234234234234234234234234',
          b1: 1,
          b2: 1,
          b3: 1,
          c1: 1,
          c2: 1,
          c3: 1
        },
        {
          a: 123,
          b1: 123,
          b2: 123,
          b3: 1,
          c1: 123,
          c2: 123,
          c3: 1
        },
        {
          a: 56757,
          b1: 1,
          b2: 56757,
          b3: 1,
          c1: 567567,
          c2: 1,
          c3: 1
        }
      ]
      setPostBack({
        page,
        limit,
        total: 0,
        data: a
      })
    } catch (error) {}
  }

  useEffect(() => {
    loadPostbackManage(1, postBack.limit)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div className="heading-5">Table Report</div>
      </div>

      <div style={{ marginTop: '16px', background: 'white' }}>
        <TableGroup
          data={postBack.data}
          columns={columns()}
          page={postBack.page}
          limit={postBack.limit}
          total={postBack.total}
          loadPage={loadPostbackManage}
          // onExpand={}
        />
      </div>
    </div>
  )
}
