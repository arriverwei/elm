<template>
    <div>
        <AppHeader></AppHeader>
        <div class="search">          
            <div class="search-top-box">
                <div v-for="(item,index) in contentlist" :key="index">
                    <h3>{{item.title}}</h3>
                    <p>{{item.subtitle}}</p>
                    <img :src="imglist[index]"/>
                </div>               
            </div>
        </div>
    </div>    
</template>

<script>
import {getSearch,handleImg} from '@/services/services.js'
import AppHeader from '@/components/AppHeader.vue'
export default{
    data(){
        return{
            contentlist:[],            
            imglist:['https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/','https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/','https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/']
        }
    },
    components:{
        AppHeader
    },
    mounted() {
        getSearch().then((result)=>{
            this.contentlist=result                       
        })
    },
}
</script>

<style scoped>
.search{
    position: relative;    
    top:0;
    left:0;
    width: 100%;
    height:100%;
}
.search-top-box{
    position: relative;
    width: 100%;
    height: 160px;
    display: flex;
    box-sizing: border-box;
    border-bottom:10px solid #f5f5f5;
}
.search-top-box{
    flex:1;
    flex-wrap: wrap;
    box-sizing: border-box;
}
.search-top-box div:nth-child(1){
    width: 50%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    border-right:1px solid #f5f5f5;
}
.search-top-box div:nth-child(1) img{
    width: 75px;
    position: absolute;
    right: 10px;
    bottom: 10px;
}
.search-top-box div:nth-child(1) h3{
    color: #ff9900;
    font-size: 16px;
    margin:10px 10px 5px 20px;
}
.search-top-box div:nth-child(1) p{
    color: #999999;
    font-size: 12px;
    margin:0px 10px 5px 20px;
}
.search-top-box div:nth-child(2){
    position: relative;
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    border-bottom:1px solid #f5f5f5;
}
.search-top-box div:nth-child(2) h3{
    color: #45b8e6;
    font-size: 16px;
    margin:10px 10px 5px 20px;
}
.search-top-box div:nth-child(2) p{
    color: #999999;
    font-size: 12px;
    margin:0px 10px 5px 20px;
}
.search-top-box div:nth-child(3){
    width: 50%;
    height: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
}
.search-top-box div:nth-child(3) h3{
    color: #f0827d;
    font-size: 16px;
    margin:10px 10px 5px 20px;
}
.search-top-box div:nth-child(3) p{
    color: #999999;
    font-size: 12px;
    margin:0px 10px 5px 20px;
}
.search-top-box div:nth-child(2) img{
    width: 45px;
    position: absolute;
    right:20px;
    bottom:20px;
}
.search-top-box div:nth-child(3) img{
    width: 45px;
    position: absolute;
    right:20px;
    bottom:20px;
}
</style>
