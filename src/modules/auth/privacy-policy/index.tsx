import { FC, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLayoutHeader } from 'src/store/actions'
import { Divider } from 'src/components/divider'
import './style.scss'

export const PrivacyPolicy:FC = () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(setLayoutHeader(false))
  }, [])

  return (
    <section className="privacy-policy">
      <div className="privacy-policy--content">
        <div className="container">
          <h2 className="heading-4">Privacy Policy</h2>
          <Divider/>
          <div className="privacy-policy--sub mt-40">
            <p>The purpose of this Privacy Policy (hereinafter referred as “Policy”) is to inform you about what information may be collected by:</p>
            <ul>
              <li>
                Tele247 Global Company Limited (a company registered in the Vietnam, under registration number 0316117300, having its registered office at 2nd Floor,
                HKL Building, 154 - 156 Nguyen Huu Tho, Phuoc Kien Commune, Nha Be District, Ho Chi Minh City, Vietnam.);
              </li>
            </ul>
            <p>
              From now on, Website <a href="/" target="_blank" rel="noreferrer">https://affscale.com</a> (hereinafter referred as “this website”, “our website”, “website”, “we” or “us”)
              has fully represented Tele247 Global Company Limited. When you visit our website, you have the ability to edit, update, correct or delete the information.
            </p>
            <p>The security procedures that we have are implemented to protect your privacy.</p>
            <p>
              This Policy applies where we are acting as a data controller with respect to your personal
              data and therefore it determines the purposes and means of the processing of that personal data.
            </p>
            <p>This Policy will apply to Tele247 Global Company Limited in Singapore</p>
            <p>
              We take all necessary efforts to ensure that our processing of your personal data meets
              the standards of EU General Data Protection Regulation 2016/679 of the European Parliament and of the Council of 27 April 2016 (GDPR)
              as we believe these are the highest data protection standards (regardless of whether the controller is registered).
            </p>
            <p>If you do not agree to all the terms and conditions of this Policy, please do not use our Website.</p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">COLLECTION OF INFORMATION</div>
            <p>We obtain your personal data mainly through any information you provide directly to us. Personal data collected directly from you, including:</p>
            <ul>
              <li>Your name (or username)</li>
              <li>E-mail address</li>
              <li>Messengers details (Skype, Telegram)</li>
              <li>Your professional background</li>
              <li>Payment information</li>
            </ul>
            <p>Please submit all these information so that we are able to provide you the service you have requested.</p>
            <p>
              We may also collect non-personally identifiable information from you when you visit the Website
              (e.g. IP address, geographical location, browser type and version, operating system, the date and time of visits, the pages viewed, time spent at our Website etc.).
              This information is collected and analyzed in the aggregate in order to improve the function and content of the Website.
              You can find more information in the section about Cookies of this Policy.
            </p>
            <p>We may expand the list of personal data requested from you by amending this Policy.</p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">USE OF INFORMATION</div>
            <p>We use information provided by you for a variety of purposes:</p>
            <ul>
              <li>Registering you as Publisher or Advertiser on our Website, providing you with your personal account to use and receive our services;</li>
              <li>Communicating with you;</li>
              <li>Fulfillment of KYC / AML procedures;</li>
              <li>Understanding and meeting your needs and preferences;</li>
              <li>Developing new and enhancing existing service offerings;</li>
              <li>Monitoring and analyzing trends, statistics, usage and activities in connection with our Website;</li>
              <li>Marketing purposes (add you to our email subscription list, send you promotional materials, offers by means of email advertising, etc.);</li>
              <li>Meeting legal and regulatory requirements.</li>
            </ul>
            <p>Non-personally identifiable information may be used to analyze trends and statistics, enhance the Website’s operation or serve content and advertisements.</p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">LEGAL GROUNDS</div>
            <p>All mentioned personal data and information may be processed on the following legal basis:</p>
            <ul>
              <li>Performing the contract we have with you;</li>
              <li>Legitimate interest in monitoring and improving our website and services, and proper administration of our Website.</li>
              <li>Consent. For example, in relation to marketing purposes and sending you any promotional materials.</li>
            </ul>
            <p>In any case, please, remember that by submitting your personal data on our Website you agree that we are collecting, processing, using, storing your personal datas.</p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">PROCESSING</div>
            <p>
              We will process your personal data legally and fairly and not use it outside the purposes of which we have informed you.
              As much as we are able, we shall ensure that all of your personal data is accurate and up to date. Personal data processing
              will be carried out the following life cycle (collection, systematization, accumulation, storage, update (update, modify, exploit, distribute), including transfer),
              depersonalization, blocking, destruction of personal data.
            </p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">STORAGE OF PERSONAL DATA</div>
            <p>
              We are responsible for ensuring that the personal information we collect from you remains accurate, timely, and secure.
              We deploy various security measures such as encryption and authentication tools in line with the current state of the art to protect and maintain the security,
              integrity and availability of your personal data. In addition, we use the following measures:
            </p>
            <ul>
              <li>Strict criteria for authorisation to access your personal data on a “need-to-know” basis only and exclusively for the specified purpose</li>
              <li>Transfer of acquired data in secured form</li>
              <li>Storage of confidential data in our secure servers</li>
              <li>Firewall safeguarding of IT systems to provide protection against unauthorised access</li>
              <li>Continuous monitoring of access to IT systems to detect and prevent the misuse of personal data.</li>
            </ul>
            <p>
              If you have received a password from us in order to be able to access certain parts of our Website, you are responsible for keeping this password
              confidential and for compliance with all other security procedures which we make you aware of from time to time. We ask you not to share your password with anyone.
            </p>
            <p>
              Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure and while we strive to protect your personal information,
              we cannot guarantee or warrant its complete security. We shall not be responsible for losses that you or any person may suffer as a result of a breach of
              confidentiality in respect to your use of the Website or any information you transmit to the Website. Also, we do not assume any responsibility for the data
              you submit to or receive from us through the Internet or for any unauthorized access or use of that information and we cannot and do not guarantee that information
              communicated by you to us or sent to you by us will be received or that it will not be altered before or after its transmission to us.
            </p>
            <p>
              You agree to not hold us and our Parties (respective past, present and future employees, officers, directors, contractors, consultants,
              advisers, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors)
              and assigns liable for any loss or damage of any sort incurred as a result of any misappropriation, interception, modification, deletion, destruction or use of
              information provided through our Website.
            </p>
            <p>
              We will keep your personal data for as long as necessary for the purpose for which we initially collected them.
              If you want to stop us processing your personal data, please contact us.
            </p>
            <p>
              Of course, if there are any financial obligations between us or legal actions, we will keep your personal data until the end of
              the period in which legal action or investigations might arise in respect of the services provided.
            </p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">DISCLOSURE OF PERSONAL DATA</div>
            <p>We may disclose information that we collect about you should we have reason to believe that:</p>
            <ul>
              <li>It is necessary to identify, contact, or bring legal action against persons or entities who may be causing harm to you, us, or others;</li>
              <li>It is necessary because of official inquiry of governmental authorities;</li>
              <li>It is necessary securing compliance with law's provision or with requirements of judicial proceedings concerning us;</li>
              <li>We may also disclose information when we believe the law requires it.</li>
            </ul>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">ACCESS OR CORRECTIONS TO YOUR INFORMATION</div>
            <p>
              You are able to correct, update or change your personal data provided to us by sending us an e-mail or by making the necessary amendments
              in your personal account (feedback forms, chats).
            </p>
            <p>
              In addition, you may request us to delete your personal data from our database. Upon your e-mail request to terminate the processing of your personal data,
              we will terminate processing your personal data. Our contact information is listed below. We will use commercially reasonable efforts to accommodate all suchrequests.
            </p>
            <p>
              You may also opt out of receiving promotional communications from us at any time by following the instructions in those communications.
              If you opt out, we may still send you non-promotional communications, such as technical notices, support or administrative notifications or
              information about changes to this Policy.
            </p>
            <p>
              You also has other rights which are provided to you by data protection law, including but not limited to: right to have free access
              to your personal data that have been provided to you and that have been subject to processing; to be informed about amendments made to the terms of
              this Policy in an efficient manner before the implementation of new amendments or, otherwise, of the new information processing policy; right to be forgotten;
              right to restrict processing, right to withdraw consent if it was given, etc.
            </p>
            <p>
              If you have any request, complaint or claim to us in relation to processing of your personal data by us,
              please send it to our contact e-mail from your contact e-mail, which was indicated by you on our Website. Your e-mail must contain:
            </p>
            <ul>
              <li>Your name and other personal data, which was provided by you on our Website to help us to identify you;</li>
              <li>Description of the facts that give rise to the request, claim or complaint and the purpose sought (update, correction, deletion or fulfillment of duties).</li>
            </ul>
            <p>
              We will consider all requests from you within 14 days. Before answering the claim, we shall verify your identity and find your personal data in our database.
              If the claim or information provided is incomplete, we will request additional information for your identification, which shall be provided by you within 5 days
              of receipt of the claim to remedy the failures. If you fail to submit the required documentation or information within 5 days of the date of the initial claim,
              you shall be deemed to have waived the claim.Once your request has been received with complete information, the 14 days’ term will start again.
              When it is not possible to answer your request within such term, we will inform you about the reasons for the delay and of the date when your request
              will be dealt with, which in no case may exceed 30 days following the expiration of the first term.
            </p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">COOKIES</div>
            <p>
              A cookie is a small piece of data sent from a website and stored on your computer by your web browser while you are browsing.
              Our Website uses cookies to distinguish you from other users of our Websites. This helps us to provide you with a good experience when
              you browse our website to track your online browsing habits on the Internet, allows us to target advertising, which may be interesting to you and
              allows us to improve our Website. You can find detailed information about cookies on pop-up windows when firstly visiting our Website.
            </p>
            <p>Most web browsers are set to accept cookies as a default. You may wish to opt out by turning off cookies (please refer to the help menu on your browser).</p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">PROTECTION OF CHILDREN</div>
            <p>
              The website is a general audience website that is designed or targeted to people at least 18 years of age.
              We do not knowingly collect, use or disseminate any personal data from children under the age 18.
              If any personal data regarding a child under the age of 18 has been collected on the website, we will make reasonable efforts to
              delete it from our records immediately.
            </p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">MODIFICATIONS TO POLICY</div>
            <p>
              This Policy may be amended from time to time. We reserves the right to change this Privacy Policy at any time.
              Any changes to this Policy will be effective immediately upon posting the latest version on our Website.
              We will notify you appropriately when we make changes to the privacy policy and we will amend its revision date so that you know when we last amended it.
              We do encourage you to review this statement periodically so as to always be informed about how we are processing and protecting your personal information.
            </p>
            <p>
              We may notify you of changes to this policy by email or through the private messaging system on our Website.
              If you disagree with the changes in our Policy, please do not use the Website after the posting of such changes online.
              By using the Website following the posting of changes to this Policy, you agree to all such changes.
            </p>
          </div>

          <div className="privacy-policy--sub mt-40">
            <div className="heading-6 mb-32">QUESTIONS OR COMMENTS OR HOW TO CONTACT US</div>
            <p>If you have any questions about this Policy, please contact us at</p>
            <p>admin@affscale.com.</p>
            <p>This Privacy Policy is effective as of 01.01.2021</p>
          </div>
        </div>
      </div>
      <div className="privacy-policy--footer">
        <div className="container">
          <p>Privacy Policy for AFFSCALE</p>
        </div>
      </div>
    </section>
  )
}
