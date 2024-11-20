import { useDispatch as _useDispatch, useSelector as _useSelector } from 'react-redux'

import { AppDispatch, AppState } from './types'

export const useDispatch = _useDispatch.withTypes<AppDispatch>()
export const useSelector = _useSelector.withTypes<AppState>()
