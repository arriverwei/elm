<template>
    <div class="bottom-list">
       <ul class="bottom-ul">
            <li v-for="(item, i) in bottomlist" :key="i" 
            @click="changePage(item.path,item.id)" :class="{active:isshow==item.id}">            
            <span class="iconfont" :class='item.img'></span>
            {{item.title}}
            </li>
       </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isshow:1,
            bottomlist:[
                {title:'首页',path:'/home',img:'icon-changyonglogo40',id:'1'},
                {title:'发现',path:'/search',img:'icon-iconfontzhizuobiaozhun023103',id:'2'},
                {title:'订单',path:'/order',img:'icon-tuanduicankaoxian-',id:'3'},
                {title:'我的',path:'/mine',img:'icon-ziyuan',id:'4'}
            ]
        }
    },
    methods:{
        //切换页面
        changePage(path,id){
            this.$router.push(path);
            this.isshow=id;    
        }    
        
    }
}
</script>

<style scoped>
.bottom-list{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 49px;
    background: #fff;
    
}
.bottom-ul{
   display: flex;  
   box-shadow:1px 0 0 0 #ccc;
}
.bottom-ul li{
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: center;
    font-size: 10px;
    color: #ccc;
    height: 49px;

}
.bottom-ul li span{
    font-size: 18px;
    margin-top: 5px;
}
.bottom-ul li.active{
    color: deepskyblue;
}
</style>
