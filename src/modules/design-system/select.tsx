import { FC, useEffect, useState } from 'react'
import { useValidation } from 'src/hooks/useValidation'
import { formDataSelectSchema } from './schema'
import { Button } from 'src/components/button'
import { Select } from 'src/components/select'
import { IOption, TChangeEventSelect } from 'src/interfaces'

interface IFormData {
  option1: string | number | null
  option2: string | number | null
  option3: string | number | null
}

interface IOptions {
  options1: IOption[]
}

export const SelectUI: FC = () => {
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    option1: null,
    option2: 'lucy',
    option3: 'lucy'
  })
  const [option, setOption] = useState<IOptions>({
    options1: []
  })

  const handleSelect = (value: TChangeEventSelect, name: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const loadOption1 = () => {
    try {
      const options: IOption[] = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true }
      ]

      setOption((prevState) => ({
        ...prevState,
        options1: options
      }))
    } catch (error) {}
  }

  const handleSubmit = async () => {
    try {
      const isValid = await validate({
        schema: formDataSelectSchema,
        data: { ...formData }
      })

      if (!isValid) return null

      console.log({ formData })
    } catch (error) {}
  }

  useEffect(() => {
    loadOption1()
  }, [])

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="heading-5">Select</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px' }}>
        <Select
          required
          label="Name"
          placeholder="Select an option"
          options={option.options1}
          value={formData.option1}
          onChange={(value) => handleSelect(value, 'option1')}
          error={errors.option1}
        />
        <Select
          required
          showSearch
          label="Select search"
          placeholder="Select an option"
          options={option.options1}
          value={formData.option2}
          onChange={(value) => handleSelect(value, 'option2')}
          error={errors.option2}
        />
        <Select
          disabled
          showSearch
          label="Select disable"
          options={option.options1}
          value={formData.option3}
        />
      </div>
    </div>
  )
}
