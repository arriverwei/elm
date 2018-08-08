import axios from 'axios'
import API from '../API/api.js'

//美食、商超、水果(轮播)
export function getSwiper(){
    return new Promise((resolve,reject)=>{
        axios.get('restapi/shopping/openapi/entries?latitude=22.609725&longitude=114.029113&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then(response=>{       
            let data=response.data[0].entries.map(item=>{
                return{
                    name:item.name,                   
                    id:item.id,
                    image_hash:item.image_hash
                }
                
            })
            resolve(data);
        }).catch(error=>{
            console.log('失败')
        })
    })
}

//发现页面
export function getSearch(){
    return new Promise((resolve,reject)=>{
        axios.get('restapi/member/v1/discover?platform=1&block_index=0').then(response=>{          
            let data=response.data[1].map(item=>{                
                return{
                    content_url:item.content_url,
                    id:item.id,
                    main_pic_hash:item.main_pic_hash,
                    subtitle:item.subtitle,
                    title:item.title,
                    title_color:item.title_color,
                    ubt_stats_id:item.ubt_stats_id
                }
            })
            resolve(data);
        }).catch(error=>{
            console.log('失败')
        })
    })
}


//拼接img
export function handleImg(path,size){
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
}





