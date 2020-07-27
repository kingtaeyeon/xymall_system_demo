import React, {Component} from 'react';
import '@/pages/login/login.sass';
import { withRouter } from 'react-router-dom';
import {Form, Input } from "antd";
import { connect } from 'react-redux';
import { login } from '../../actions/user';



// const mapState = state => ({
//     isLogin: state.user.isLogin,
//     isLoading: state.user.isLoading
// })
//
// @connect(mapState, { login })
// @Form.create()
class Login extends Component {

    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            // this.props.isLogin
            // ?
            // <Redirect to='/index' />
            // :
            <div className="login" >
                <div className="login-form">
                    <Form className="login-form">
                        <div className="login-text">欢迎登录</div>
                        <Form.Item>
                            <Input
                                disabled={this.props.isLoading}
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
                            <input type="submit" onClick={() => this.props.history.push('/index')} className="login-btn" value="登录"/>
                            <span className="edit-btn">退出</span>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
