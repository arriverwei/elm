import axios from 'axios'
import API from '../API/api.js'

//美食、商超、水果(轮播)
export function getSwiper(){
    return new Promise((resolve,reject)=>{
        axios.get('restapi/shopping/openapi/entries?latitude=22.609725&longitude=114.029113&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5').then(response=>{
            let data=response
            console.log(data)
        }).catch(error=>{
            console.log('失败')
        })
    })
}



