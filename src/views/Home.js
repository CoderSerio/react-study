import React from 'react';
import {Component} from "react"

class Home extends Component {
    constructor() {
        super()
        this.state = {
            data:666
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                   {this.state.data}
                </div>
            </React.Fragment>
        )
    }
    // 生命周期
    componentDidMount() {
        console.log('hhh')
    }
}

export default Home


