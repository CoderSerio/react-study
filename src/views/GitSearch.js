import React, {Component} from "react"
import { UserCard } from "../components/GitSearch/UserCard/UserCard"
import { InputFiled } from "../components/GitSearch/InputFiled/InputFiled"

const boxCSS = {
    // border: '1px solid #000',
    width: '84vw',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap'
}

export default class GitSearch extends Component {
    constructor() {
        super()
        this.state = {
            userInfo: []
        }
        
    }
    emitUserInfo = (data) => {
        // console.log('执行了！！！')
        this.setState({userInfo: data})
    }
    render(){
        return (
            <React.Fragment>
                <InputFiled emitUserInfo={this.emitUserInfo}></InputFiled>
                <div style={boxCSS}>
                    {this.state.userInfo.map(one => {
                        return <UserCard userInfo={one} key={one.id}></UserCard>
                    })}
                </div>
            </React.Fragment>
        )
    }
}