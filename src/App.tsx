import { FC } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { PersistGate } from 'redux-persist/integration/react'

import { createBrowserHistory } from 'history'
import { theme } from './constants/theme'
import { store, persistor } from './store'
import { AppLayout } from './layout'

const AppTheme: FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <AppLayout/>
    </ConfigProvider>
  )
}

const App: FC = () => {
  const history = createBrowserHistory()
  const PGate = PersistGate as any

  return (
    <Provider store={store}>
      <PGate
        loading={null}
        persistor={persistor}
      >
        <Router history={history}>
          <AppTheme/>
        </Router>
      </PGate>
    </Provider>
  )
}

export default App
