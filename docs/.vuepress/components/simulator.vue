<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'simulator',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let container: HTMLDivElement | null = null

    onMounted(() => {
      if (typeof document === 'undefined') return

      container = document.createElement('div')
      const iframeEl = document.createElement('iframe')
      const pageEl = document.querySelector('.page') as HTMLDivElement

      container.classList.add('simulator')
      container.appendChild(iframeEl)

      const url = cleanPath(props.url)
      if (import.meta.env.DEV) {
        iframeEl.src = `http://localhost:2021/demo/#/${url}`
      } else {
        iframeEl.src = `/demo/#/${url}`
      }

      pageEl.appendChild(container)
    })

    onUnmounted(() => {
      if (container) {
        container.remove()
      }
    })

    return () => void 0
  },
})

function cleanPath(path: string) {
  return path.indexOf('/') === 0 ? path.substr(1) : path
}
</script>

<style>
.simulator {
  position: fixed;
  top: 90px;
  right: 30px;
  z-index: 1;
  box-sizing: border-box;
  width: 360px;
  min-width: 360px;
  height: 640px;
  overflow: hidden;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
}

.simulator iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

@media (max-width: 970px) {
  .simulator {
    display: none;
  }
}
</style>
