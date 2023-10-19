import { FC, useEffect, useState } from 'react'
import { Button } from 'src/components/button'
import { IOption } from 'src/interfaces'
import { ISearchSelectBlock, SelectBlock } from 'src/components/select-block'
import { Colors } from 'src/constants/theme'

interface IFormData {
  values: IOption[]
}

interface IOptions {
  options1: IOption[]
}

export const SelectBlockUI: FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    values: [
      { value: '1', label: '1' },
      { value: '2', label: '2' }
    ]
  })

  const [option, setOption] = useState<IOptions>({
    options1: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' }
    ]
  })

  const [search, setSearch] = useState<ISearchSelectBlock>({
    search: '',
    values: [],
    options: []
  })

  const handleSearch = (
    search: string,
    values: IOption[] = formData.values,
    options: IOption[] = option.options1
  ) => {
    const valuesFilter = values.filter((item) =>
      (item.label as string).toLowerCase().includes(search.toLowerCase())
    )
    const optionsFilter = options.filter((item) =>
      (item.label as string).toLowerCase().includes(search.toLowerCase())
    )

    setSearch({
      search,
      values: valuesFilter,
      options: optionsFilter
    })
  }

  const handleRemove = (option: IOption) => {
    setFormData((items) => ({
      ...items,
      values: items.values.filter((item) => item.value !== option.value)
    }))

    setOption((items) => ({
      ...items,
      options1: [option, ...items.options1]
    }))
  }

  const handleAdd = (option: IOption) => {
    setFormData((item) => ({ ...item, values: [...item.values, option] }))

    setOption((items) => ({
      ...items,
      options1: items.options1.filter((item) => item.value !== option.value)
    }))
  }

  const handleSubmit = async () => {
    try {
      console.log({ formData })
    } catch (error) {}
  }

  useEffect(() => {
    if (search.search) {
      handleSearch(search.search, formData.values, option.options1)
    }
  }, [formData.values, option.options1])

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="heading-5">Select Block</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px', width: '200px' }}>
        <SelectBlock
          search={search}
          values={formData.values}
          options={option.options1}
          colorIcon={Colors.green500}
          colorSelected="green"
          onSearch={handleSearch}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      </div>
    </div>
  )
}
