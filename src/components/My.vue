<template>
  <div>
    My
    <button>点击</button>

  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  interface Student {
    name: string
    class: string
    age: number
  }

  export default defineComponent({
    props: {
      success: { type: String },
      callback: {
        type: Function as PropType<() => void>
      },
  student: {
    type: Object as PropType<Student>,
      required: true
  }
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
  }
  })

</script>

<style scoped>

</style>
