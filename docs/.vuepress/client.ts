import { defineClientConfig } from 'vuepress/client'
import Contributor from './theme/components/Contributor.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Contributor', Contributor)
  },

})
