import React, {Component} from "react"
import CSS from './index.module.css'
import { getUsersInfo, autoGetUsersInfo } from "../../../apis/getUsers"


export class InputFiled extends Component {
    constructor () {
        super()
        this.state = {
            inputValue: '',
        }
        autoGetUsersInfo((res) => {
            this.props.emitUserInfo(res.items)
        }, (err) => {
            console.warn(err)
        })
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
                // 向父级传递搜索结果
                this.props.emitUserInfo(res.data.items)
            }, (err) => {
                console.warn(err)
            })
        }
    }
    render () {
        return (
            <React.Fragment>
                <div className={CSS.container}>
                    <h1 className={CSS.title}>Github搜索案例</h1>
                    <input  className={CSS.input} 
                            placeholder='please enter a user name of GitHub' 
                            onChange={this.handleInputChange} 
                            onKeyDown={this.doSearch}></input>
                </div>
            </React.Fragment>
            
        )
    }
    componentDidMount() {
        
    }
}