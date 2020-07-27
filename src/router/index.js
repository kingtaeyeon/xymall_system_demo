import Login from '@/views/login/login';
import Index from '@/views';

export const main = [
    { path: '/login', name: '登录', component: Login },
    { path: '/', name: '首页', component: Index },

]

/**
 * 菜单相关路由
 */
export const menus = [

]

export const routerConfig = {
    main, menus
}
