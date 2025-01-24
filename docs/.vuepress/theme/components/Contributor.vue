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
    <div>
      <h1 style="text-align:center;font-size:28px;font-weight:bolder">文档贡献者名单</h1>
    </div>
    <CardGrid :cols="{ sm: 1, md: 3, lg: 3 }">
      <Card>
        <template #icon>
          <img
            src="https://crafthead.net/avatar/0ctber"
            alt="0ctber"
            style="width: 100%; height: auto; border-radius: 50%;"
          />
        </template>
        <template #title>
          <h2 style="font-size: 20px; font-weight: bold; margin: 10px 0;">0ctber</h2>
        </template>
        <template #default>
          <p style="font-size: 14px; color: #666; margin: 5px 0;">服务器管理员</p>
        </template>
      </Card>
    </CardGrid>
  </VPHomeBox>
</template>
