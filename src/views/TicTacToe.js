import React, {Component}  from 'react'
import Board from '../components/TicTanToe/Board/Board'

export default class TicTacToe extends Component{
    constructor() {
        super()
        this.state = {

        }
    }

    render(){
        return (
           <Board></Board>
        )
    }
}

