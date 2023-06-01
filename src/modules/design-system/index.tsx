import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLayoutLoading } from 'src/store/actions'
import { useValidation } from 'src/hooks/useValidation'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { ENotify } from 'src/constants/enum'
import { formDataSchema } from './schema'
import { notify } from 'src/utils/notify.util'

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
    dispatch(
      notify({
        type: ENotify.SUCCESS,
        message: 'asdasdasd'
      })
    )
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
      123123
      {/* <Box mb={3}>
        <Typography variant="h5">Typography</Typography>
        <Box display="flex" alignItems="flex-end" gap={2} mt={2}>
          <Typography variant="h1">h1</Typography>
          <Typography variant="h2">h2</Typography>
          <Typography variant="h3">h3</Typography>
          <Typography variant="h4">h4</Typography>
          <Typography variant="h5">h5</Typography>
          <Typography variant="h6">h6</Typography>
          <Typography variant="subtitle1">subtitle1</Typography>
          <Typography variant="subtitle2">subtitle2</Typography>
          <Typography variant="body1">body1</Typography>
          <Typography variant="body2">body2</Typography>
        </Box>
      </Box>

      <Divider/>

      <Box mt={3} mb={3}>
        <Typography variant="h5">Button</Typography>
        <Box display="flex" alignItems="center" gap={3} mb={2} mt={2}>
          <Button>Button primary</Button>
          <Button order="secondary">Button secondary</Button>
          <Button disabled>Button disabled</Button>
          <Button
            width={300}
            background={theme.colors['--color-negative-500']}
            colorText={theme.colors['--color-white']}
          >
            Button other
          </Button>
        </Box>

        <Button fullWidth>Button Full width</Button>
      </Box>

      <Divider/>

      <Box mt={3} mb={3}>
        <Box display="flex" gap={3} alignItems="center">
          <Typography variant="h5">Input</Typography>
          <Button onClick={handleSubmit}>Test input field</Button>
        </Box>
        <Box mt={2} display="flex" gap={3}>
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
        </Box>
      </Box> */}
    </div>
  )
}

export default DesignSystem
