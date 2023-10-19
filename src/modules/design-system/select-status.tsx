import { FC, useState } from 'react'
import { useValidation } from 'src/hooks/useValidation'
import { formDataSelectSchema } from './schema'
import { Button } from 'src/components/button'
import { SelectStatus } from 'src/components/select-status'
import { EStatus } from 'src/constants/enum'

interface IFormData {
  option1: string | null
  option2: string | null
}

export const SelectStatusUI: FC = () => {
  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    option1: 'status',
    option2: null
  })

  const optionsStatus: EStatus[] = [
    EStatus.STATUS,
    EStatus.DRAFT,
    EStatus.ACTIVE
  ]

  const handleSelect = (value: string | number, name: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
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

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div className="heading-5">Select Status</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', gap: '24px' }}>
        <SelectStatus
          label="Filter"
          options={optionsStatus}
          value={formData.option1}
          onChange={(value) => handleSelect(value, 'option1')}
          error={errors.option1}
        />
      </div>
    </div>
  )
}
