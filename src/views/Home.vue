<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <My />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import My from '@/components/My.vue'

@Options({
  components: {
    HelloWorld, My
  }
})
export default class Home extends Vue {}
</script>
