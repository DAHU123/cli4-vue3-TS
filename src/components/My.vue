<template>
  <div>
    <el-button @click="popUp" type="primary">主要按钮</el-button>
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
    <el-button type="danger" @click="login">登录</el-button>
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
    setup(props, context) {
      const year = ref(2020)
      const month = ref<string | number>('9')
      const student = reactive({ name: '阿勇', age: 16, class: 'cs' }) as Student
      const { current: count, inc, dec, set, reset } = useCount(2, {
        min: 1,
        max: 15
      })
      const obj: any = {
        a: {
          name: '哈哈哈',
          value: {
            str: '呵呵呵',
            val: {
              age: 12
            }
          }
        }
      }
      const a = obj.a.name?.str ?? 'lll'
      console.log(props)
      console.log(context)
      console.log(a)
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
        // const { proxy } = getCurrentInstance()
        // const params = {
        //   username: 'xupengpeng',
        //   password: '7k5458'
        // }
        //
        // proxy.$api.postAccountLogin({ params }).then(res => {
        //   console.log(res)
        // })
      }
    }
  })

</script>

<style scoped>

</style>
