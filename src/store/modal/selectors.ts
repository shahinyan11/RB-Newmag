import { createSelector } from 'reselect'
import { AppStore } from '@/store/types'

export const storeSelector = (store: AppStore) => store.modal

export const bottomSheetSelector = createSelector(storeSelector, store => store.bottomSheet)
