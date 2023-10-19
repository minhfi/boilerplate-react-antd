import { FC } from 'react'
import CheckSuccess from 'src/assets/images/check-success.png'
import './style.scss'

export const ThankYouPage: FC = () => {
  return (
    <div className="thank-page">
      <div className="thank-page-form">
        <div className="fx fx-column fx-ai-center gap-16">
          <img src={CheckSuccess} alt="check-success" width={80}/>
          <div className="heading-4">Thank You</div>
        </div>
        <div className="thank-page-form__content">
          We have received your registration information. Our manager will
          review it and contact you shortly.
        </div>
      </div>
    </div>
  )
}
