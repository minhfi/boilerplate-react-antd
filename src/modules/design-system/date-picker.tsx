import { FC, useState } from 'react'
import { useValidation } from 'src/hooks/useValidation'
import { formDataSchema } from './schema'
import { Button } from 'src/components/button'
import { DatePicker } from 'src/components/date-picker'

interface IFormData {
  date: string
}

export const DatePickerUI: FC = () => {
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    date: ''
  })

  const handleChangeDate = (date: string, name: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date
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
        <div className="heading-5">Date Picker</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px' }}>
        <DatePicker
          label="Date"
          name="date"
          placeholder="Select a day"
          value={formData.date}
          onChange={(value) => handleChangeDate(value, 'date')}
          error={errors.date}
        />
      </div>
    </div>
  )
}
