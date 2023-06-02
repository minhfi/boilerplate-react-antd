import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLayoutLoading } from 'src/store/actions'
import { useValidation } from 'src/hooks/useValidation'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { ENotify } from 'src/constants/enum'
import { formDataSchema } from './schema'
import { notify } from 'src/utils/notify.util'
import { Divider } from 'antd'
import { Colors } from 'src/constants/theme'

interface IFormData {
  name: string
  phone: string
}

const DesignSystem: FC = () => {
  const dispatch = useDispatch()

  const { errors, validate } = useValidation<IFormData>()

  const [formData, setFormData] = useState<IFormData>({
    name: '',
    phone: ''
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNotify = () => {
    notify({
      type: ENotify.SUCCESS,
      message: 'Test success'
    })
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

  useEffect(() => {
    dispatch(setLayoutLoading(false))
  }, [])

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginTop: '24px' }}>
        <div className="heading-5">Typography</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '16px', gap: '16px' }}>
          <div className="heading-1">heading1</div>
          <div className="heading-2">heading2</div>
          <div className="heading-3">heading3</div>
          <div className="heading-4">heading4</div>
          <div className="heading-5">heading5</div>
          <div className="heading-6">heading6</div>
          <div className="subtitle-1">subtitle1</div>
          <div className="subtitle-2">subtitle2</div>
          <div className="body-1">body1</div>
          <div className="body-2">body2</div>
        </div>
      </div>

      <Divider/>

      <div style={{ margin: '24px 0' }}>
        <div className="heading-5">Button</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '16px', gap: '16px' }}>
          <Button onClick={handleNotify}>Button primary</Button>
          <Button type="link">Button secondary</Button>
          <Button disabled>Button disabled</Button>
          <Button
            style={{
              width: '300px',
              background: Colors.negative,
              color: Colors.white
            }}
          >
            Button other
          </Button>
        </div>

        <Button style={{ width: '100%', marginTop: '16px' }}>Button Full width</Button>
      </div>

      <Divider/>

      <div style={{ margin: '24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div className="heading-5">Input</div>
          <Button type="link" onClick={handleSubmit}>Test input field</Button>
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
        </div>
      </div>
    </div>
  )
}

export default DesignSystem
