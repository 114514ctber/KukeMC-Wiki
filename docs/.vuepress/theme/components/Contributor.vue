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
        <template #default>
          <div style="display: flex; align-items: center; gap: 16px;">
            <img
              src="https://crafthead.net/avatar/0ctber"
              alt="0ctber"
              style="width: 80px; height: 80px; border-radius: 5%; align-self: flex-end;"
            />
            <div>
              <h2 style="font-size: 24px; font-weight: bold; margin: 0;">0ctber</h2>
              <p style="font-size: 14px; color: #666; margin: 5px 0;">站点开发/责任编辑</p>
              <p style="font-size: 14px; color: #666; margin: 5px 0;">一个普通的志愿者</p>
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #default>
          <div style="display: flex; align-items: center; gap: 16px;">
            <img
              src="https://crafthead.net/avatar/kukemc"
              alt="kukemc"
              style="width: 80px; height: 80px; border-radius: 5%; align-self: flex-end;"
            />
            <div>
              <h2 style="font-size: 24px; font-weight: bold; margin: 0;">kukemc</h2>
              <p style="font-size: 14px; color: #666; margin: 5px 0;">服主/责任编辑</p>
              <p style="font-size: 14px; color: #666; margin: 5px 0;">古希腊掌管最高神犬的生物</p>
            </div>
          </div>
        </template>
      </Card>
      <Card>
        <template #default>
          <div style="display: flex; align-items: center; gap: 16px;">
            <img
              src="https://m.ccw.site/gandi_application/user_assets/6b7325e5925229a458d6b6abd107401d.jpg"
              alt="zurnm"
              style="width: 80px; height: 80px; border-radius: 5%; align-self: flex-end;"
            />
            <div>
              <h2 style="font-size: 24px; font-weight: bold; margin: 0;">zurnm</h2>
              <p style="font-size: 14px; color: #666; margin: 5px 0;">站点维护/编辑助理</p>
              <p style="font-size: 14px; color: #666; margin: 5px 0;">负责站点日常维护</p>
            </div>
          </div>
        </template>
      </Card>
    </CardGrid>
  </VPHomeBox>
</template>
