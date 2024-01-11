/**
 * Plugins for Pinia
 */

import { getFilterResponse } from '@/store/utils/mixin'

export const pluginPinia = ({ store }) => {
  store.filterResponse = getFilterResponse
}
