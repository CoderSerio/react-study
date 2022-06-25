import React from 'react'
import Board from '../components/TicTanToe/Board/Board'

export default class TicTacToe extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNum: 0
        }
    }
    render () {
        const history = this.state.history
        const current = history[this.state.stepNum]
        // eslint-disable-next-line no-undef
        const winner = this.calculateWinner(current.squares)

        const moves = history.map((step, move) => {
            const desc = move
            ? 'Go to move #' + move 
            : 'Go to game start'
            return (
                <li>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status = '下一个是:' + (this.state.xIsNext ? 'X' : 'O')
        if(winner) {
            status = `游戏结束,${winner}胜利!` 
        } 

        return (
            <div className='game'>
                <div className="game-board">
                    <Board
                      squares={current.squares}
                      onClick={(i) => this.handleClick(i)}
                    />

                </div>
                <div>
                    <div>{status}</div>
                    <div>{moves}</div>                
                </div>
            </div>
        )
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNum + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if (this.calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            history: history.concat({squares: squares}),
            xIsNext: !this.state.xIsNext,
            stepNum: history.length
        })
    }
    // 回溯
    jumpTo (step) {
        this.setState({
            xIsNext: !(step % 2),
            stepNum: step,
        })
    } 
    // 判断游戏是否结束
    calculateWinner(squares) {
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
            const sq = squares
            if(sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
                return sq[a]
            }
        }
        
        return null
    }
}