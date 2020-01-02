import React, {Component} from 'react';
import '@/pages/login/login.sass';
import LoginForm from '@/pages/login/components/LoginForm'

class Login extends Component {

    render() {
        return ( 
            <div className="login" >
                <div className="login-form">
                    <LoginForm></LoginForm>
                </div>
            </div>
        )
    }
}

export default Login;