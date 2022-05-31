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

export class GitSearch extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    headPortrait: 'https://portrait.gitee.com/uploads/avatars/user/2946/8839775_Serio_1631872042.png!avatar200',
                    username: 'Serio',
                }
            ],
            userInfo: []
        }
    }
    emitUserInfo = (data) => {
        this.setState({userInfo: data})
    }
    render(){
        return (
            <React.Fragment>
                <InputFiled emitUserInfo={this.emitUserInfo}></InputFiled>
                <div style={boxCSS}>
                    {this.state.userInfo.map(one => {
                        return <UserCard userInfo={one}></UserCard>
                    })}
                </div>
            </React.Fragment>
        )
    }
}