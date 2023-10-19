import { ChangeEvent, FC, useState } from 'react'
import { Input } from 'src/components/input'
import { useValidation } from 'src/hooks/useValidation'
import { formDataSchema } from './schema'
import { Button } from 'src/components/button'
import { InputNumber } from 'src/components/input-number'

interface IFormData {
  name: string
  phone: string
  inputNumber: string | number
}

export const InputUI: FC = () => {
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    phone: '',
    inputNumber: ''
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      const isValid = await validate({
        schema: formDataSchema,
        data: { ...formData }
      })
      if (!isValid) return null
    } catch (error) {}
  }

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="heading-5">Input</div>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px' }}>
        <Input
          required
          label="Name"
          name="name"
          placeholder="Write your name"
          value={formData.name}
          onChange={handleChangeInput}
          error={errors.name}
        />

        <Input
          label="Phone"
          name="phone"
          placeholder="Write your phone"
          value={formData.phone}
          onChange={handleChangeInput}
        />

        <Input
          label="Input icon"
          name="phone"
          placeholder="Write your phone"
          value={formData.phone}
          onChange={handleChangeInput}
          addonBefore={<div>$</div>}
        />

        <InputNumber
          required
          label="Input number"
          name="inputNumber"
          placeholder="Write your input number"
          value={formData.inputNumber}
          onChange={handleChangeInput}
        />

        <Input
          disabled
          label="Input disable"
          name="name"
          placeholder="Write your name"
        />
      </div>
    </div>
  )
}
