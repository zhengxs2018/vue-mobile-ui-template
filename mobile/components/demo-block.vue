<template>
  <div class="demo-block" :class="{ 'demo-block--flex': flex }">
    <h2 class="demo-block__title">{{ title }}</h2>
    <div v-if="card" class="demo-block__card">
      <slot></slot>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
    card: Boolean,
    flex: Boolean,
  },
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('block', 'demo') {
  @include element('title') {
    margin: 0;
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    @include next('card') {
      margin-top: 0;
    }
  }

  @include element('card') {
    margin: 12px 12px 0;
    overflow: hidden;
    border-radius: 8px;
  }

  @include modifier('flex') {
    @include element('card') {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      width: 100%;
    }
  }
}
</style>
