<template>
  <div id="app">
    
    <router-view></router-view>
    <Appbottom></Appbottom>
  </div>
</template>

<script>
import Appbottom from '@/components/Appbottom.vue'
export default {
  name: 'App',
  components:{
    Appbottom
  }
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
