<template>
    
    
</template>

<script>
import {getSwiper} from '@/services/services.js'
export default {
    mounted() {
        getSwiper().then((data)=>{
            console.log(data)
        })

        
    },
}
</script>

<style>

</style>
