import { FC, useState } from 'react'
import { InputSearch } from 'src/components/input-search'

export const InputSearchUI: FC = () => {
  const [search, setSearch] = useState<string>('')

  const handleSearch = (value: string) => {
    setSearch(value)
  }

  console.log(search)

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="heading-5">Input Search</div>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px' }}>
        <InputSearch
          placeholder="Search...."
          onChange={handleSearch}
        />
      </div>
    </div>
  )
}
