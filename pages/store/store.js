import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
// import { AsyncStorage } from 'AsyncStorage';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index';


function* exampleSaga() {
  console.log("Example saga reached");
}
const sagaMiddleware = createSagaMiddleware();

let store
let initialStates = {
  lastUpdate: 0,
  light: false,
  count: 0,
  exampleData: [],
  error: null,
  islogin: false,
}

const persistConfig = {
  key: 'primary',
  storage:storage,
  // AsyncStorage,
  whitelist: ['isAuthentication','userprofile','appTheme','myBioData'], // place to select which state you want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

function makeStore(initialState = initialStates) {
  // var inisial = {app: 'myapp', userprofile: 'Raflesngln'};

  return createStore(
    persistedReducer,
    // initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? makeStore(preloadedState)
sagaMiddleware.run(exampleSaga);


  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}


export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
