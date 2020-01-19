import React, {Component} from 'react';
import '@/pages/login/login.sass';
import LoginForm from '@/pages/login/components/LoginForm'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            this.props.isLogin
            ?
            <Redirect to='/index' />
            :
            <div className="login" >
                <div className="login-form">
                    <LoginForm></LoginForm>
                </div>
            </div>
        )
    }
}

export default Login;