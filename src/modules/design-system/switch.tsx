import { FC, useState } from 'react'
import { Button } from 'src/components/button'
import { Switch } from 'src/components/switch'
import { TChangeEvent } from 'src/interfaces'

export const SwitchUI: FC = () => {
  const [formData, setFormData] = useState({
    label1: false,
    label2: true
  })

  const handleChange = (event: TChangeEvent) => {
    const { name, value } = event.target

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = () => console.log({ formData })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div className="heading-5">Switch</div>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <Switch
          name="label1"
          checked={formData.label2}
          onChange={handleChange}
        />
        <Switch disabled/>

        <Switch
          name="label2"
          label="label1"
          checked={formData.label1}
          onChange={handleChange}
        />
        <Switch
          name="label2"
          label="label2"
          checked={formData.label2}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
