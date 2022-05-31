import React, {Component} from 'react'
import CSS from './index.module.css'

export class UserCard extends Component {
    render(){
        return (
            <React.Fragment>
                {/* <main className={CSS.main}>这是展示区域</main> */}
                <a className={CSS.oneCard} target="blank" href={this.props.userInfo.html_url}>
                    <div className={CSS.headPortraitContainer}>
                        <img src={this.props.userInfo.avatar_url} alt="headPotrait"></img>
                    </div>
                    <div className={CSS.username}>
                        {this.props.userInfo.login}
                    </div>
                    <div className={CSS.userID}>
                        {this.props.userInfo.id}
                    </div>
                </a>
            </React.Fragment>
        )
    }
}