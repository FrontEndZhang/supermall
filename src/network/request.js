import axios from 'axios';
import {baseUrl} from './config'

export function request(config){

    var source = axios.CancelToken.source();
    // 1.创建实例
    const instance = axios.create({
        baseURL : baseUrl,
        timeout : 5000,
    })
    // 2.axios的拦截器
    // 2.1 请求拦截的作用
    // instance.interceptors.request.use(config => {
    //     // ...
    //     config.cancelToken = source.token;
    //     return config
    // }, err => {
    //     // ...
    // })
    // 2.2 响应拦截
    // instance.interceptors.request.use(res => {
    //     // ...
    //     return res.data
    // }, err => {
    //     // ...
    // })

    // 3.发送真正的网络请求
    return instance(config)
}