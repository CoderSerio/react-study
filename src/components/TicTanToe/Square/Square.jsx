import React, {Component} from 'react'
import CSS from './index.module.css'

export default class Square extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }
    render() {
        return (
            <button className={CSS.square} onClick={this.props.onClick}>
              {this.props.data}
            </button>
        )
        // 原来父级中子组件绑定事件还要在这里处理一下，我就说怎么一直没反应...
    }
} 