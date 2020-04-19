import {request} from './request';
import {homeMultidataUrl, homeGoodsUrl} from './config'

// home页面所有的请求

export function getHomeMultidata() {
    return request({
        url : homeMultidataUrl
    })
}

export function getHomeGoods(type,page){
    return request({
        url : homeGoodsUrl,
        params : {
            type,
            page,
        }
    })
}