<template>
    <div class="nav">
        <div class="nav-left">
            <h3>品质套餐</h3>
            <p class="nav-p">搭配齐全吃得好</p>
            <p class="nav-shop">立即抢购 ></p>
        <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt=""> 

        </div>
        <div class="nav-left right">
            <h3>限量抢购</h3>
            <p class="nav-p">超值美味9.9元起</p>
            <p class="nav-shop"><span>1514</span>人正在抢购 ></p>
        <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">

        </div>
   
   
    </div>    
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    width:100%;
    height: 140px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.nav-left{
    width: 175px;
    height: 100%;
    background:#f5f5f5;
    margin-right:5px; 
    position: relative;
}
.nav-left h3{
    font-size: 16px;
    color: #4b4b4b;
    margin: 5px 0 5px 10px;
}
.nav-left .nav-p{
    font-size: 12px;
    color: #777777;
    margin: 5px 0 5px 10px;
}
.nav-left .nav-shop{
    font-size: 12px;
    color: #af8260;
    margin: 5px 0 5px 10px;
}
.right h3{
    color: #ea3c3c;
}
.right .nav-shop{
    color: #000;
    font-weight: 600;
}
.right .nav-shop span{
    color: #ec5959;
}
.nav-left img{   
    position: absolute;
    width: 70%;
    right: 0px;
    bottom:0px;
}
</style>
