<template>
  <div class="demo-badge">
    <demo-block title="基础使用">
      <md-badge content="5">
        <div class="demo-badge__block" />
      </md-badge>
      <md-badge content="10">
        <div class="demo-badge__block" />
      </md-badge>
      <md-badge content="Hot">
        <div class="demo-badge__block" />
      </md-badge>
      <md-badge dot>
        <div class="demo-badge__block" />
      </md-badge>
    </demo-block>

    <demo-block title="最大值">
      <md-badge content="20" max="9">
        <div class="demo-badge__block" />
      </md-badge>
      <md-badge content="50" max="20">
        <div class="demo-badge__block" />
      </md-badge>
      <md-badge content="200" max="99">
        <div class="demo-badge__block" />
      </md-badge>
    </demo-block>

    <demo-block title="自定义颜色">
      <md-badge content="5" color="#1989fa">
        <div class="demo-badge__block" />
      </md-badge>
      <md-badge content="10" color="#1989fa">
        <div class="demo-badge__block" />
      </md-badge>
      <md-badge dot color="#1989fa">
        <div class="demo-badge__block" />
      </md-badge>
    </demo-block>

    <demo-block title="自定义徽标内容">
      <md-badge>
        <div class="demo-badge__block" />
        <template #content>
          <!-- <md-icon name="success" class="badge-icon" /> -->
        </template>
      </md-badge>
      <md-badge>
        <div class="demo-badge__block" />
        <template #content>
          <!-- <md-icon name="cross" class="badge-icon" /> -->
        </template>
      </md-badge>
      <md-badge>
        <div class="demo-badge__block" />
        <template #content>
          <!-- <md-icon name="down" class="badge-icon" /> -->
        </template>
      </md-badge>
    </demo-block>

    <demo-block title="独立展示">
      <md-badge content="20" style="margin-left: 16px" />
      <md-badge content="200" max="99" style="margin-left: 16px" />
    </demo-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoBadge',
})
</script>

<style lang="scss">
@import 'sass-bem/bem';
@import '../../style/var';

@include component('badge', 'demo') {
  height: 100%;
  background-color: #fff;

  @include element('block') {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }

  // 覆盖
  @include component('badge', $md-prefix) {
    @include element('wrapper') {
      margin-left: 16px;
    }
  }
}
</style>
