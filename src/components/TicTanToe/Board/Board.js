import React, {Component} from 'react'
import CSS from './index.module.css'
import Square from '../Square/Square'

export default class Board extends Component {
    constructor() {
        super()
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            // status: ''
        }
    }
    
    // 这样方便传参，并且还能利于所有状态统一管理，便于判断游戏胜负
    renderSquare(i) {
        return (
            <Square data={this.state.squares[i]} onClick={() => this.handleClick(i)}></Square>
        )
    }

    // 判断游戏是否结束
    calculateWinner() {
        // 是否一条线上，只有八种情况是胜利
        const winnerLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for(let i = 0; i < winnerLines.length; i ++) {
            // 数组解构赋值，太帅了
            const [a, b, c] = winnerLines[i]
            // 太长了，写个简写
            const sq = this.state.squares
            if(sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
                return sq[a]
            }
        }
        return null
    }
    syncSetState = (callback) => {
        return new Promise((res, rej) => {
            res(callback)       
        })
    }
    
    // 处理点击事件
    handleClick(i) {
        if (this.calculateWinner() || this.state.squares[i]) {
            return
        }
        const sq = this.state.squares.slice()
        sq[i] = this.state.xIsNext ? 'X' : 'O'
        
        this.setState({
            squares: sq,
            xIsNext: !this.state.xIsNext,
        })
        // alert('text') 
        // debugger
        // alert 先执行，视图还没发生改变,所以可以推断setState是异步的
        // 因此下述代码不能及时判断
        // let winner = this.calculateWinner()
        // alert(winner)
        // if(winner) {
        //    this.setState({
        //        status: `游戏结束,${winner}胜利!`
        //    }) 
        // }
        // 本来打算像官方文档那样写到render中，但是这样写又会有新的问题
        // 后来又想到用nextTick，但是没有生效，这样看起来我似乎还没有掌握这个
        // this.$nextTick(() => {
        //     let winner = this.calculateWinner()
        //     alert(winner)
        //     if(winner) {
        //         this.setState({
        //             status: `游戏结束,${winner}胜利!`
        //         }) 
        //     }
        // })
        // 再后来想到async, 然后终究还是错付了
        // const that = this
        // ;(async function () { 
        //     that.setState({
        //         squares: sq,
        //         xIsNext: !that.state.xIsNext,
        //         status: sta
        //     })
        // })()
        // 然后是promise封装....
        // const that = this
        // this.syncSetState(
        //     () => this.setState({
        //         squares: sq,
        //         xIsNext: !that.state.xIsNext,
        //         status: sta
        //     })
        // ).then(callback => {
        //     callback()
        // })

    }
   
    render(){
        // 不能这么写，因为这样会死循环，setState->render->setState->render->...
        // let winner = this.calculateWinner()
        // if(winner) {
        //    this.setState({
        //        status: `游戏结束,${winner}胜利!`
        //    }) 
        // }
        let status = '下一个是:' + (this.state.xIsNext ? 'X' : 'O')
        let winner = this.calculateWinner()
        if(winner) {
            status = `游戏结束,${winner}胜利!` 
        }
        return (
            <React.Fragment>
                <h2 style={{textAlign:'center', fontSize:'64px'}}>井字棋案例</h2>
                <div style={{textAlign: 'center', fontSize:'32px'}}>{status}</div>
                <div className={CSS.boardRow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={CSS.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={CSS.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </React.Fragment>
        )
    }
}