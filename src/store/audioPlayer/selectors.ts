import { createSelector } from 'reselect'
import { AppStore } from '@/store/types'

export const storeSelector = (store: AppStore) => store.audioPlayer

export const selectSpeed = createSelector(storeSelector, store => store.speed)
export const selectCurrentTrack = createSelector(storeSelector, store => store.currentTrack)
