import { FC, useEffect, useState } from 'react'
import { useValidation } from 'src/hooks/useValidation'
import { formDataSelectMultiSchema } from './schema'
import { Button } from 'src/components/button'
import { SelectMulti } from 'src/components/select-multi'
import { IOption, TChangeEventSelect } from 'src/interfaces'

interface IFormData {
  option1: (string | number)[]
  option2: (string | number)[]
  option3: (string | number)[]
}

interface IOptions {
  options1: IOption[]
}

export const SelectMultiUI: FC = () => {
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    option1: [],
    option2: ['lucy'],
    option3: ['lucy']
  })
  const [option, setOption] = useState<IOptions>({
    options1: []
  })

  const handleSelect = (values: TChangeEventSelect, name: string) => {
    console.log(values)
    setFormData((prevState) => ({
      ...prevState,
      [name]: values
    }))
  }

  const loadOption1 = () => {
    try {
      const options: IOption[] = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'yiminghe', label: 'Yiminghe' },
        { value: 'disabled', label: 'Disabled' }
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
        schema: formDataSelectMultiSchema,
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
        <div className="heading-5">Select Multi</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px' }}>
        <SelectMulti
          required
          showSearch
          allowClear
          label="Select"
          placeholder="Select an option"
          options={option.options1}
          value={formData.option1}
          onChange={(values) => handleSelect(values, 'option1')}
          error={errors.option1}
        />
        <SelectMulti
          required
          showSearch
          allowClear
          label="Select"
          placeholder="Select an option"
          options={option.options1}
          value={formData.option2}
          onChange={(values) => handleSelect(values, 'option2')}
          error={errors.option2}
        />
        <SelectMulti
          disabled
          label="Select multi disable"
          options={option.options1}
          value={formData.option3}
        />
      </div>
    </div>
  )
}
