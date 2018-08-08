<template>
<div class="homepage">
    <div class="swiper-container" ref="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
            <ul class="swiper-ul ul">
                <li v-for="(item,i) in swiperlist" :key="i">
                <img :src="imglist[i]" >
                    {{item.name}}   
                </li>    
            </ul> 
            </div>
            <div class="swiper-slide">
                    <ul class="swiper-ul _ul">
                        <li v-for="(item,i) in swiperlist2" :key="i">
                        <img :src="imglist[i]" >
                            {{item.name}}   
                        </li>    
                </ul> 
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <Nav></Nav>
</div>    

    
    

    
</template>

<script>
import {getSwiper,handleImg} from '@/services/services.js'
import Nav from '@/pages/Home/Nav.vue'
export default {
    data(){
        return{
            swiperlist:[],
            swiperlist2:[],
            imglist:[],
            imglist2:[]
        }
        
    },
    components:{
        Nav
    },
    mounted(){       
        this.bannerSwiper=new Swiper(this.$refs.banner,{
            loop:true,            
			pagination: '.swiper-pagination',
        })
        getSwiper().then((result)=>{ 
            this.swiperlist=result 
            this.swiperlist=result.slice(0,10)
            this.swiperlist2=result.slice(10,12)                                 
            for(let i=0;i<this.swiperlist.length;i++){
                var img= handleImg(this.swiperlist[i].image_hash,45)
                this.imglist.push(img)               
            }
        })

    },
    updated(){
       this.bannerSwiper.update();
       this.bannerSwiper.reLoop();
       this.bannerSwiper.slideTo(1, 0);
   }

    
}
</script>

<style scoped>
.homepage{
    width: 100%;
    height: 315px;
    position: absolute;
    top:100px;
    left: 0;
}
.swiper-container{
    width: 100%;
    height: 175px;
   
}
.ul{
    display: flex;
    flex-wrap: wrap;
}
.ul li{
    flex:20%;
    font-size: 12px;
    text-align: center;
    margin:10px 0; 
}
.ul img{
    margin: 0 auto;
}
._ul{
    display: flex;
    flex-wrap:wrap; 
    text-align: center;
}
 ._ul li{
    width: 20%;
    margin:10px 0; 
    font-size: 12px;
}
._ul img{
    margin: 0 auto;
}
.swiper-pagination{
    bottom:0;
}
</style>
