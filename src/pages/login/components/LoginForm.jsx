import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import { randomNum, calculateWidth } from '@/utils/utils';

class LoginForm extends Component {
    

        render() {
          return (
            <Form  className="login-form">
              <div className="login-text">欢迎登陆</div>
              <Form.Item>
                  <Input
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
            
          </Form>
          );
        }
     
  

}

export default LoginForm;