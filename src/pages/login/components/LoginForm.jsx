import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
import { randomNum, calculateWidth } from '@/utils/utils'

class LoginForm extends Component {
     state = {
          focusItem: -1,   //保存当前聚焦的input
          code: ''         //验证码
        }

        componentDidMount () {
          this.createCode()
        }

     /**
   * 生成验证码
   */
  createCode = () => {
     const ctx = this.canvas.getContext('2d')
     const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
     let code = ''
     ctx.clearRect(0, 0, 80, 39)
     for (let i = 0; i < 4; i++) {
       const char = chars[randomNum(0, 57)]
       code += char
       ctx.font = randomNum(20, 25) + 'px SimHei'  //设置字体随机大小
       ctx.fillStyle = '#D3D7F7'
       ctx.textBaseline = 'middle'
       ctx.shadowOffsetX = randomNum(-3, 3)
       ctx.shadowOffsetY = randomNum(-3, 3)
       ctx.shadowBlur = randomNum(-3, 3)
       ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
       let x = 80 / 5 * (i + 1)
       let y = 39 / 2
       let deg = randomNum(-25, 25)
       /**设置旋转角度和坐标原点**/
       ctx.translate(x, y)
       ctx.rotate(deg * Math.PI / 180)
       ctx.fillText(char, 0, 0)
       /**恢复旋转角度和坐标原点**/
       ctx.rotate(-deg * Math.PI / 180)
       ctx.translate(-x, -y)
     }
     this.setState({
       code
     })
   }

}

export default LoginForm;