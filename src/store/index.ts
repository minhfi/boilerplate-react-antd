import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { reducers } from './reducers'
import { saga } from './saga'

const persistConfig = {
  key: 'store',
  storage,
  blacklist: [
    'layout',
    // 'layout.isAside',
    // 'layout.pageTitle',
    // 'layout.isLoading',
    // 'layout.navigateTo',
    // 'layout.drawer',
    'modal'
  ]
}

const initialStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const history = createBrowserHistory()

  const middleware = composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )

  const persistedReducer = persistReducer(persistConfig, reducers)

  const store = createStore(persistedReducer, {}, middleware)

  const persistor = persistStore(store)

  sagaMiddleware.run(saga)

  return { store, persistor }
}

export const { store, persistor } = initialStore()

export type TAppState = ReturnType<typeof store.getState>

export type TAppDispatch = typeof store.dispatch

export type TSelectorResult<T> = (state: TAppState) => T
