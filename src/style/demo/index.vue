<template>
  <div class="demo-style">
    <demo-block title="文字省略">
      <div class="demo-style__ellipsis" :class="component('ellipsis')">
        这是一段最多显示一行的文字，后面的内容会省略
      </div>
      <div
        class="demo-style__ellipsis"
        :class="component('multi-ellipsis--l2')"
      >
        这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略
      </div>
    </demo-block>

    <demo-block card title="1px 边框">
      <div :class="component('hairline--top')" />
    </demo-block>

    <demo-block flex card title="动画">
      <div class="demo-style__block" @click="animate('fade')">Fade</div>
      <div class="demo-style__block" @click="animate('slide-up')">Slide Up</div>
      <div class="demo-style__block" @click="animate('slide-down')">
        Slide Down
      </div>
      <div class="demo-style__block" @click="animate('slide-left')">
        Slide Left
      </div>
      <div class="demo-style__block" @click="animate('slide-right')">
        Slide Right
      </div>
    </demo-block>

    <transition :name="transitionName">
      <div v-show="show" class="demo-style__animate__block" />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import bem from '../../util/bem'

export default defineComponent({
  setup() {
    const state = reactive({
      show: false,
      transitionName: '',
    })

    const animate = (transitionName: string) => {
      state.show = true
      state.transitionName = bem.component(transitionName)

      setTimeout(() => {
        state.show = false
      }, 500)
    }

    return {
      ...toRefs(state),
      component: bem.component,
      animate,
    }
  },
})
</script>

<style lang="scss">
@import 'sass-bem/bem';
@import '../var';

@include component('style', 'demo') {
  @include element('ellipsis') {
    max-width: 300px;
    margin-left: $padding-md;
    font-size: 14px;
    line-height: 18px;
  }

  @include element('block') {
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background: #f2f3f5;
    border-radius: 4px;

    @include first {
      margin-right: 10px;
    }
    @include duo {
      margin-right: 10px;
    }
  }

  @include element('animate__block') {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: $blue;
    border-radius: 8px;
  }

  // 覆盖
  @include component('hairline', $md-prefix) {
    @include modifier('top') {
      height: 30px;
      background-color: $white;

      @include after {
        top: 5px;
      }
    }
  }
}
</style>
