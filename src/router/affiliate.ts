import { lazy } from 'react'
import { IRouterOption } from 'src/interfaces'

// auth
const SignIn = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.SignIn }))
})

const SignUp = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.SignUp }))
})

const ThankYouPage = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.ThankYouPage }))
})

const PrivacyPolicy = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.PrivacyPolicy }))
})

const TermsAndConditions = lazy(() => {
  return Promise.all([
    import('src/modules/auth'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.TermsAndConditions }))
})

// core
const Forbidden = lazy(() => {
  return Promise.all([
    import('src/modules/core'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.Forbidden }))
})

const NotFound = lazy(() => {
  return Promise.all([
    import('src/modules/core'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.NotFound }))
})

const InternalServerError = lazy(() => {
  return Promise.all([
    import('src/modules/core'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.InternalServerError }))
})

// dashboard
const Dashboard = lazy(() => {
  return Promise.all([
    import('src/modules/cabinet-affiliate/dashboard'),
    new Promise((resolve) => setTimeout(resolve, 300))
  ]).then(([module]) => ({ default: module.Dashboard }))
})

export const routesAffiliate: IRouterOption[] = [
  // auth
  {
    path: '/:type(sign-in)?',
    exact: true,
    component: SignIn,
    isRequired: false
  },

  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
    isRequired: false
  },
  {
    path: '/privacy-policy',
    exact: true,
    component: PrivacyPolicy,
    isRequired: false
  },
  {
    path: '/terms-conditions',
    exact: true,
    component: TermsAndConditions,
    isRequired: false
  },
  {
    path: '/thank-you-page',
    exact: true,
    component: ThankYouPage,
    isRequired: false
  },

  // dashboard
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard,
    isRequired: true
  },

  // error
  {
    path: '/403',
    exact: true,
    component: Forbidden
  },
  {
    path: '/404',
    exact: true,
    component: NotFound
  },
  {
    path: '/500',
    exact: true,
    component: InternalServerError
  },

  // last route handle 404 error
  {
    path: '*',
    component: NotFound
  }
]
