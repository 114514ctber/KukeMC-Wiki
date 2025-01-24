<script setup lang="ts">
import type { PlumeHomeConfigBase } from 'vuepress-theme-plume'

const props = defineProps<PlumeHomeConfigBase & {
  // 组件 props, frontmatter 中的属性将会传递给组件
}>()
</script>

<template>
  <VPHomeBox
    :type="type"
    class="title"
    :background-image="backgroundImage"
    :background-attachment="backgroundAttachment"
    :full="false"
  >

  <div><h1 style="text-align:center;font-size:28px;font-weight:bolder">文档贡献者名单</h1></div>
    <CardGrid :cols="{ sm: 1, md: 3, lg: 3 }">
        <Card title="0ctber" icon="https://crafthead.net/avatar/0ctber"></Card>
    </CardGrid>
  </VPHomeBox>
</template>
