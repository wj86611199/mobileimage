<template>
  <div id="app">

  </div>
</template>

<script>
import list from './list'
import { ImagePreview } from 'vant'

export default {
  name: 'App',
  data () {
    return {
      activeNames: ''
    }
  },

  components: {},
  mounted () {
    window.onload = () => {
      this.map = new window.BMapGL.Map('app')
      const point = new window.BMapGL.Point(117.352521, 32.962989)
      this.map.centerAndZoom(point, 12)
      for (const key in list) {
        const point = new window.BMapGL.Point(...list[key].position)
        const marker = new window.BMapGL.Marker(point, {
          desc: list[key].desc,
          key
        })
        // 创建信息窗口
        const opts = {
          width: 200,
          height: 80,
          title: `<div class="navbar">
          <div class="left">${key}</div>
          <a>查看图片</a>
          </div>`
        }
        const infoWindow = new window.BMapGL.InfoWindow(list[key].desc, opts)
        marker.addEventListener('click', event => {
          this.map.openInfoWindow(infoWindow, point) // 开启信息窗口
          if (infoWindow.isOpen()) {
            const alink = infoWindow.map.infoWindow.titleDiv.querySelector('a')
            const showImg = () => { this.showImages(list[key]) }
            alink.addEventListener('touchstart', showImg)
            infoWindow.addEventListener('close', () => {
              alink.removeEventListener('touchstart', showImg)
            })
          }
        })
        this.map.addOverlay(marker)
      }
    }
  },
  methods: {
    showImages (info) {
      info.images && ImagePreview(info.images)
    }
  }
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
