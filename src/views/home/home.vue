<template>
  <div class="home">
    {{ message }}
  </div>
</template>

<script>
import { useHomeStore } from '@/store/home'
export default {
  name: 'home',
  components: {},
  props: {},
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  computed: {
    name() {
      return useHomeStore().getName
    }
  },
  watch: {},
  created() {
    this.message = this.name
  },
  mounted() { },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
