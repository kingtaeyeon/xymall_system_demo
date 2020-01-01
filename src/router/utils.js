import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '@/views/login/login';
import Index from '@/views';

const routes = [
    { path: '/login', name: '登录', component: Login },
    {path: '/', exact: true, name: '首页', component: Index}
]

const route = { path: '/login', name: '登录', component: Login };

// 循环渲染当前路由数组中一维数组中的组件
export const RenderRoutes = ({ routes }) => { return (routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)) };



// 渲染当前组件
export const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => {
            return (
                <route.component {...props} routes={route.routes} />
            )
        }}
    />
);