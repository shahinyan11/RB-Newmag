import rootReducer from '@/store/rootReducer'
import store from '@/store/index'

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export type GetState = () => AppState
export type AppStore = ReturnType<typeof rootReducer>
