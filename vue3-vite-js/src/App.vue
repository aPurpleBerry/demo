<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterView />
  阿里云服务器返回：{{ showdata }}
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'

let showdata = ref('1')
const result =  axios.get('/api/student').then(res => {
  console.log(res);
  showdata.value = res
}).catch(err => {
  console.log(err);
})
</script>

<style scoped>

</style>
