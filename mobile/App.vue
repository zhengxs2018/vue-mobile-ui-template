<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
}

#app {
  height: 100%;
  width: 100%;
  background: #f8f8f8;
}
</style>
