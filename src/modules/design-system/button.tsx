import { FC } from 'react'
import { IconAdd } from 'src/assets/icons'
import { Button } from 'src/components/button'

export const ButtonUI: FC = () => {
  return (
    <div style={{ margin: '24px 0' }}>
      <div className="heading-5">Button</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          marginTop: '16px',
          marginBottom: '16px',
          gap: '16px'
        }}
      >
        <Button>Button primary</Button>
        <Button disabled>Button disabled</Button>
        <Button type="default">Button secondary</Button>
        <Button type="default" disabled>
          Button disabled
        </Button>
        <Button type="text">Button text</Button>
        <Button type="default" icon={<IconAdd/>}>
          Button icon
        </Button>
      </div>

      <Button block>
        Button Full width
      </Button>
    </div>
  )
}
