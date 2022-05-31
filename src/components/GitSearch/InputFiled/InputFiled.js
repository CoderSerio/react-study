import React, {Component} from "react"
import CSS from './index.module.css'
import { getUsersInfo } from "../../../apis/getUsers"


export class InputFiled extends Component {
    constructor () {
        super()
        this.state = {
            inputValue: '',
        }
    }
    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value})
    }
    doSearch = (e) => {
        if (e.keyCode === 13) { // 按下enter
            let data = {
                q: this.state.inputValue
            }
            getUsersInfo(data, (res) => {
                // this.setState({usersInfo: res.data.items})
                // 向父级传递搜索结果
                this.props.emitUserInfo(res.data.items)
            })
        }
    }
    render () {
        return (
            <React.Fragment>
                <div className={CSS.container}>
                    <h1 className={CSS.title}>Github搜索案例</h1>
                    <input className={CSS.input} placeholder='please enter a user name of GitHub' onChange={this.handleInputChange} onKeyDown={this.doSearch}></input>
                </div>
            </React.Fragment>
            
        )
    }
}