export default{
    install(Vue){
        Vue.filter('formatImg',(path,size)=>{
            if(!path){
                return '';
            }
            if(path.endsWith('png')){
                path = path+'.png'
            }
            else if(path.endsWith('jpeg')){
                path = path +'.jpeg'
            }
            
            path ='https://fuss10.elemecdn.com' + '/' + path + `?imageMogr/format/webp/thumbnail/!${size}x${size}r/gravity/Center/crop/${size}x${size}/`;
            
            return path;
        })
    }
}