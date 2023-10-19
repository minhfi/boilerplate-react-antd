import { FC, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLayoutHeader } from 'src/store/actions'
import { Divider } from 'src/components/divider'

import './style.scss'

export const TermsAndConditions:FC = () => {
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    dispatch(setLayoutHeader(false))
  }, [])

  return (
    <section className="terms-condition">
      <div className="terms-condition--content">
        <div className="container">
          <h2 className="heading-4">Terms and Conditions for AFFSCALE</h2>
          <a href="/" className="heading-5 terms-condition--link">HOME</a>
          <Divider/>
          <div className="terms-condition--sub mt-40">
            <h3 className="heading-5">Terms and Conditions</h3>
            <p>Last updated: April 1, 2021</p>
            <p>Please read these terms and conditions carefully before using Our Service.</p>
            <div className="terms-condition--box">
              <p>I. INTRODUCTION</p>
              <p>II. BUSINESS STRATEGY</p>
              <ul>
                <li><a href="#">ARTICLE 1. DEFINITION</a></li>
                <li><a href="#">ARTICLE 2. SCOPE OF WORKS</a></li>
                <li><a href="#">ARTICLE 3. TERM OF COOPERATION</a></li>
                <li><a href="#">ARTICLE 4. OBLIGATIONS OF PARTY B</a></li>
                <li><a href="#">ARTICLE 5. ANTI – FRAUD PROVISION</a></li>
                <li><a href="#">ARTICLE 6. SIGNING UP ACCOUNT</a></li>
                <li><a href="#">ARTICLE 7. TRACKING AND PAYMENT</a></li>
                <li><a href="#">ARTICLE 8. CONFIDENTIALITY, NON-COMPETE</a></li>
                <li><a href="#">ARTICLE 9. TERMINATION</a></li>
                <li><a href="#">ARTICLE 10. MISCELLANEOUS PROVISIONS</a></li>
              </ul>
            </div>
          </div>

          <div className="terms-condition--sub mt-40">
            <div className="heading-6 mb-32">I. INTRODUCTION</div>
            <p>Affscale offers a variety of solutions for converting traffic into revenue.</p>
            <div className="subtitle-1">1.1. OUR PARTNERS</div>
            <p>You can cooperate with us if you are:</p>
            <ul>
              <li>- Developers owning applications with lots of users.</li>
              <li>- Owner of fanpages, website (mobile & desktop), Youtube Channel….with ability of communicating users.</li>
              <li>- Anyone who can use or call for a large amount of traffic via Google Adwords, Facebook Ads, Zalo, Coc Coc...</li>
              <li>- Representative of Advertising Agency/ other Ad network.</li>
            </ul>
            <div className="subtitle-1">1.2. HOW TO EARN MONEY FROM AFFSCALE</div>
            <p>Affscale is currently launching in 1 main forms:</p>
            <ul>
              <li>
                - CPA (Cost Per Action): Commission calculated on successful action basis, such as order, filling in a form, confirming email,… upon different offer.
                Our CPA offers propose high rate of commission, with various options of customers and geography.
              </li>
            </ul>
          </div>

          <div className="terms-condition--sub mt-40">
            <div className="heading-6 mb-32">II. BUSINESS STRATEGY</div>
            <p>Affscale applying the policy of Net 7 to guarantee the fastest payment.</p>
            <p>
              This General Terms (hereinafter as “Terms”) is published by TELE247 GLOBAL COMPANY LIMITED Joint Stock Company
              (hereinafter as “TELE247 GLOBAL COMPANY LIMITED” or “Party A”) regulating obligations to partners of Party A
              (hereinafter as “TELE247 GLOBAL COMPANY LIMITED” or “Party B”), including the following terms and conditions:
            </p>
            <div className="subtitle-1">ARTICLE 1. DEFINITION</div>
            <p>In cooperation scale, the terminologies shall be defined:</p>
            <p><b>1.1.</b> “CPC” (Cost per click) means the form of calculating advertising fees upon a click on a banner/ an image leading to advertising page.</p>
            <p><b>1.2.</b> “CPM” (Cost per 1.000 impressions) means the form of calculating advertising fees upon 1,000 times of displaying advertisment.</p>
            <p>
              <b>1.3.</b> “CPI” (Cost per install) means the form of calculating advertising fees upon an installation and opening of an application
              or a mobile game in condition of conneting to Internet.
            </p>
            <p>
              <b>1.4.</b> “CPA” (Cost per action) means the form of calculating advertising fees upon a special action (such as payment, filling a form, or others)
              leading to advertisers.
            </p>
            <p><b>1.5.</b> “CPO” (Cost per order) means the form of calculating advertising fees upon an each order confirmed by email, the phone according to the advertiser’s regulation.</p>
            <p><b>1.6.</b> BANNER: means banners/ images of advertisment leading to target pages.</p>
            <p><b>1.7.</b> “Campaign” means collection of advertising activities to support and promote business, to increase views of advertisment and usage of products.</p>
            <p>
              <b>1.8.</b> “Confidential information” means all confidential or top secret of Party A, including but not limited to : business, financial plan,
              technical information, operation documents, trading models, production procedures, staffs, technical guidelines of softwares, design documents…
              in writing or in speech, assigned, directly or indirectly disclosed to Party B by Party A and Party A’s staffs.
            </p>

            <div className="subtitle-1">ARTICLE 2. SCOPE OF WORKS</div>
            <p><b>2.1.</b> By signing in the Terms, Party B agree to become a Party A’s partner to develop business, provide advertising services under the Law of Vietnam.</p>
            <p><b>2.2.</b> For each Campaign, Parties shall discuss the detailed quantity, form of advertisement and unit price.</p>
            <p>
              <b>2.3.</b> Party A is recognized as the owner or authorized representative of advertising services/products, including: trademarks, domain,
              logo and other features and functions of the services/products.
            </p>
            <p>
              <b>2.4.</b> The Parties agree that all rights on intellectual property, websites is exclusively to Party A and Party A does not allow Party B
              or any other parties to copy, intervene, disorder, supplement, damage or change one or all part of services in any forms without prior consent of Party A.
            </p>
            <p><b>2.5.</b> The Terms shall not institute any relations of agents, affiliates or other commitment between Parties except for scope of works agreed above.</p>

            <div className="subtitle-1">ARTICLE 3. TERM OF COOPERATION</div>
            <p>Term of cooperation between Parties is 03 months as from the date of Party B’s confirming to agree this Terms.</p>

            <div className="subtitle-1">ARTICLE 4. OBLIGATIONS OF PARTY B</div>
            <p><b>4.1.</b> Upon requests form Party A, Party B shall consult and notify Party A the forms and demands of the Campaign.</p>
            <p>
              <b>4.2.</b> Party B is responsible to promote products/services under the scope of works. Party B guarantees the advertisment is not fraud,
              violates custom or laws, and not breach Party A’s policies published on website of Party A.
            </p>
            <p><b>4.3.</b> Every weeks, Party B co-ordinates with Party A to do tracking, confirming statistics and payment as regulated in this Terms.</p>

            <div className="subtitle-1">ARTICLE 5. ANTI – FRAUD PROVISION</div>
            <p><b>5.1.</b> Forms of fraud</p>
            <div className="pl-12">
              <p>
                The deliberate act of violating policies noted by Party A or the unauthorized intervention of Party A’s system shall be put in deliberately
                destructive behavior towards Party A's business, including (but not limited to):
              </p>
              <p>- Impact on website which are put Party A ads to create unexpected result that end users do not want.</p>
              <p>- Attack Party A’s system.</p>
              <p>- Impact on the system to cause false data.</p>
            </div>
            <p><b>5.2.</b> Fraud sanction policies</p>
            <div className="pl-12">
              <p>pIf Party A finds any fraud from Party B, Party A shall have rights to:</p>
              <p>- Stop cooperating with Party B that Party A considers not beneficial to advertisers, Party A and other Publishers.</p>
              <p>- Not recognize revenue, penalize revenue and lock account of parties violating the policies of Party A.</p>
            </div>

            <div className="subtitle-1">ARTICLE 6. SIGNING UP ACCOUNT</div>
            <p>
              To follow and update the score on Party A’s website, Party B must sign up an online account with username and passwords (hereinafter as “Account”).
              Party B commits to use the exact and up-to-date information for the Account. Party B must update the Account as soon as there are any changes of information.
              Party A shall be hold harmless from liabilities arasing from unaccurate or non-updaded information on Party B’s Account.
            </p>
            <p>Successfull registration shall mean acceptance of Party B to conditions under this Terms.</p>
            <p>Party B shall have to keep the Account secret, all actions of entering Party B’s Account are considered as Party B’s log-in.</p>
            <p>The Account shall not be popularized, assigned or transferred in any ways. In cases of doubting illegal log-in by a third party, Party B must notify Party A for solving.</p>
            <p>Information about Party B shall be Confidential information of Party A.</p>

            <div className="subtitle-1">ARTICLE 7. TRACKING AND PAYMENT</div>
            <p>7.1. Policy for individuals</p>
            <div className="pl-12">
              <p><b>7.1.1.</b> Tracking</p>
              <p>
                Party A provides online report system to Party B on https://affscale.com.
                Via the registered account, Party B can watch directly the results recorded in all forms of advertisement.
              </p>
              <p><b>7.1.2.</b> Payment term</p>
              <p>The payment term is Net 7*, determinated as following.</p>
              <p>PUBLISHER RECEIVED REVENUE = WEEKLY REVENUE + PREVIOUS REVENUE</p>
              <p>In which:</p>
              <ul>
                <li>– WEEKLY REVENUE = Revenue that occurred from Monday to Sunday will be reviewed and confirmed by the Advertiser.</li>
                <li>– PREVIOUS REVENUE = Past pending revenue that was confirmed by the Advertiser last week.</li>
                <li>
                  – The minimum revenue to be paid must be = 50 USD after taxes deduction (if there)
                  To guarantee the payment due date, Party A encourages Party B to use bank account of the same bank system with Party A – Vietnam Foreign Commercial Bank
                  (Vietcombank). Party A shall not be responsible for late payment due to the difference of bank systems.
                </li>
              </ul>
            </div>
            <p>7.2. Policy for Company</p>
            <div className="pl-12">
              <p><b>7.2.1.</b> Tracking</p>
              <p>Party A provides Party B with the online tracking on https://affscale.com and pay for Party B by Net 7*.</p>
              <p>
                If party B do not have the need for weekly payments, Party A will be flexible to ensure Party B receive a one-time payment on a fixed Friday in the month.
                The time for two parties to cross check will be based on the agreement in the contract.
              </p>
              <p><b>7.2.2.</b> Time of payment</p>
              <p>Party A will pay to Party B at a fixed time every month according to the agreement signed by both parties.</p>
              <p>
                In order to ensure the payment time, Party A recommends that Party B use a bank account in the same banking system with
                Party A as the Bank for Foreign Trade of Vietnam - Vietcombank. Party A is not responsible for late payment due to the difference of bank systems.
              </p>
              <p><b>7.2.3.</b> For payment, Party B has to provide Party A with (if any):</p>
              <ul>
                <li>- Tracking report confirmation.</li>
                <li>- Valid invoice for the amount of payment by Party A.</li>
              </ul>
            </div>

            <div className="subtitle-1">ARTICLE 8. CONFIDENTIALITY, NON-COMPETE</div>
            <p>
              <b>8.1.</b> Party B itself recognizes its ability to access Confidential information of Party A, so Party B shall have obligations to respect and
              use the information in appropriate manner.
            </p>
            <p>
              <b>8.2.</b> Party B agrees to keep Confidential information of Party A in secret and not to use them for its own benefits.
              Party B shall not use, disclose, publish, assign or provide Confidential information to any third parties in any forms except for the purposes of this Terms.
            </p>
            <p>
              <b>8.3.</b> This article is also applied to all individuals who have rights and obligations related to implementing cooperation, including managers,
              consultants, and personnel carrying out Campaign.
            </p>

            <div className="subtitle-1">ARTICLE 9. TERMINATION</div>
            <p>This Terms shall terminate in following circumstances:</p>
            <p>9.1. The Parties complete their obligations.</p>
            <p>9.2. The Parties agree to terminate cooperation.</p>
            <p>9.3. A Party becomes bankrupt, or is the subject of proceedings for liquidation or dissolution.</p>
            <p>
              9.4. The conditions or consequences of Force Majeure which have a material adverse effect on the affected Party's ability to perform
              continue for a period in excess of three (03) months despite efforts to recover.
            </p>
            <p>9.5. Party A shall have right to terminate the cooperation before the term:</p>
            <p>
              - If Party B violates the Terms and does not effort to cure within the time notified by Party A to Party B.
              In this case, Party B has to compensate all damages caused to Party A.
            </p>
            <p>- By a notice in writing to Party B at least 10 days before the day of intent termination.</p>

            <div className="subtitle-1">ARTICLE 10. MISCELLANEOUS PROVISIONS</div>
            <p>10.1. The Terms is regulated by Laws of Vietnam.</p>
            <p>
              10.2. Any disputes arising from implementation of this Agreement shall firstly be resolved through negotiations between the Parties.
              If the resolution is not reached through negotiation, the dispute shall be settled by the competent Court in Vietnam.
            </p>
            <p>10.3. The Terms is still valid in the case of one of the Parties have changes in personnel, management structure (merge, convert ...).</p>
            <p>10.4. Party A, by its own will, has rights to amend, supplement the Terms to make suitable for business and conform to current laws.</p>

          </div>
        </div>
      </div>
      <div className="terms-condition--footer">
        <div className="container">
          <p>Terms and Conditions for AFFSCALE</p>
        </div>
      </div>
    </section>
  )
}
