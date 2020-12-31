<template>
  <div>
    <button @click="popUp">弹框</button>
    <div>{{message}}</div>
    <div>reversedMessage: {{reversedMessage}}</div>
    <div>useCount,count:{{count}}</div>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <button @click="set(9)">set9</button>
    <button @click="reset">reset2</button>
    <div>year{{year}}</div>
    <div>month{{month}}</div>
    <div>student{{JSON.stringify(student)}}</div>
    <button @click="login">登录</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref, reactive } from 'vue'
  import  useCount from '@/utils/Fns'
  interface Student {
    name: string
    class: string
    age: number
  }

  export default defineComponent({
    setup() {
      const year = ref(2020)
      const month = ref<string | number>('9')
      const student = reactive({ name: '阿勇', age: 16, class: 'cs' }) as Student
      const { current: count, inc, dec, set, reset } = useCount(2, {
        min: 1,
        max: 15
      })
      return {
        year,
        month,
        student,
        count, inc, dec, set, reset
      }
    },
    props: {
      success: { type: String },
      callback: {
        type: Function as PropType<() => void>
      },
    },
    data() {
      return {
        message: 'Vue3 code style'
      }
    },
    computed: {
      reversedMessage(): string {
        return this.message.split(' ').reverse().join('')
      }
    },
    methods: {
      popUp(){
        alert(111)
      },
      login(){
        // this.$api.postAccountLogin
      }
    }
  })

</script>

<style scoped>

</style>
