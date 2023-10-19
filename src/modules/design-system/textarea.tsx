import { ChangeEvent, FC, useState } from 'react'
import { useValidation } from 'src/hooks/useValidation'
import { formDataSchema } from './schema'
import { Button } from 'src/components/button'
import { TextArea } from 'src/components/textarea'

interface IFormData {
  name: string
  phone: string
}

export const TextAreaUI: FC = () => {
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    phone: ''
  })

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

      console.log({ formData })
    } catch (error) {}
  }

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="heading-5">TextArea</div>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px' }}>
        <TextArea
          required
          label="Name"
          name="name"
          placeholder="Write your name"
          value={formData.name}
          onChange={handleChangeTextArea}
          error={errors.name}
        />
        <TextArea
          disabled
          label="Phone"
          name="phone"
          placeholder="Write your phone"
          value={formData.phone}
          onChange={handleChangeTextArea}
          error={errors.phone}
        />
      </div>
    </div>
  )
}
