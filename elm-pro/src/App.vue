<template>
  <div id="app">
    
    <router-view/>
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

</style>
