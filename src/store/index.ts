import { configureStore } from '@reduxjs/toolkit'
import produtoReducer from './reducers/carrinho'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    produto: produtoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
