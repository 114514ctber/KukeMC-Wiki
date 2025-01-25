import { defineClientConfig } from 'vuepress/client';
import Contributor from './theme/components/Contributor.vue';

export default defineClientConfig({
  enhance({ app }) {
    // 注册全局组件
    app.component('Contributor', Contributor);

    // 插入自定义脚本
    const script1 = document.createElement('script');
    script1.charset = 'UTF-8';
    script1.id = 'LA_COLLECT';
    script1.src = '//sdk.51.la/js-sdk-pro.min.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.text = 'LA.init({id:"3JuSda8vFbPyJ1m5",ck:"3JuSda8vFbPyJ1m5"})';
    document.head.appendChild(script2);
  },
});
