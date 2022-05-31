import React from 'react'
import { Component } from 'react'

class Test1 extends Component {
    constructor() {
        super()
        this.state = {
            name: 'test1',
            username: '',
            password: ''
        }
    }
    saveFormData = (dataType) => {
        return (event) => {
            this.setState({[dataType]:event.target.value})
        }
    }
    
    render () {
        return (
            <React.Fragment>
               
                <div style={{border:'1px solid #333', borderRadius: '5px'}}>
                    <div>账号:{this.state.username}</div>
                    <div>密码:{this.state.password}</div>
                </div>   
                <br/>
                <br/>
                <input onChange={this.saveFormData('username')} value={this.state.username} name="username"></input>
                
                <br/>
                <br/>
                <input onChange={this.saveFormData('password')} value={this.state.password} name="password"></input>
            </React.Fragment>
        )
    }
}
export default Test1