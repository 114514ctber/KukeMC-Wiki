import { defineClientConfig } from 'vuepress/client';
import Contributor from './theme/components/Contributor.vue';

export default defineClientConfig({
  enhance({ app }) {
    // 注册全局组件
    app.component('Contributor', Contributor);
  },
});
