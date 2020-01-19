import React, {Component} from 'react'
import {Form, Input} from 'antd'
import {connect} from 'react-redux'
import { login } from '../../../actions/user'


const mapState = state => ({
    isLogin: state.user.isLogin,
    isLoading: state.user.isLoding
})

@connect(mapState, { login })
@Form.create()
class LoginForm extends Component {


    render() {
        return (
            <Form className="login-form">
                <div className="login-text">欢迎登录</div>
                <Form.Item>
                    <Input
                        disabled={}
                        placeholder="用户名"
                        addonBefore={<span className='icon-user'></span>}
                    />
                </Form.Item>,
                <Form.Item>
                    <Input
                        type="password"
                        placeholder="密码"
                        addonBefore={<span className='icon-password'></span>}
                    />
                </Form.Item>,
                <Form.Item>
                    <Input
                        placeholder="验证码"
                        addonBefore={<span className='icon-translate'></span>}
                    />
                </Form.Item>
                <div className="submit">
                    <input type="submit" className="login-btn" value="登录"/>
                    <span className="edit-btn">退出</span>
                </div>
            </Form>
        );
    }


}

export default LoginForm;