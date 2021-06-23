<template>
  <div id="app">
    <van-collapse v-model="activeNames" accordion>
      <template v-for="(item, index) in this.list">
        <template v-if="item.children">
          <van-collapse-item :name="index" :key="item.label">
            <template #title>
              <div>{{ item.label }}</div>
            </template>
            <template v-for="(child, childKey) in item.children">
              <van-cell :key="childKey + index" @click="showImages(child)">
                {{ child.label }}
              </van-cell>
            </template>
          </van-collapse-item>
        </template>
        <template v-else>
          <van-cell :key="index" @click="showImages(item)">
            {{ item.label }}
          </van-cell>
        </template>
      </template>
    </van-collapse>
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
  created () {
    this.list = list
  },
  methods: {
    showImages (info) {
      ImagePreview(info.images)
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
