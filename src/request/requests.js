import axios from 'axios'
import { message } from 'antd'

const isDev = process.env.NODE_ENV === 'delelopment'

const service = axios.create({
    baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/176929' : ''
})
const service1 = axios.create({
    baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/176929' : ''
})


service.interceptors.request.use((config) => {
    config.data = Object.assign({}, config.data, {
        authToken: 'itisatokenplacehoder'
    })
    return config
})

service.interceptors.response.use((resp) => {
    if(resp.data.code == 200) {
        return resp.data.data
    } else {
        //全局处理错误
        message.error(resp.data.errMsg)
    }
})

// 登录接口
export const loginRequest = (userinfo) => {
    return service1.post('/api/vi/login', userinfo);
}