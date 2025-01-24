import { defineClientConfig } from 'vuepress/client'
import staff from './theme/components/Contributor.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Contributor', Contributor)
  },

})
