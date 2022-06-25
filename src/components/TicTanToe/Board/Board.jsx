import React, {Component} from 'react'
import CSS from './index.module.css'
import Square from '../Square/Square'

export default class Board extends Component {    
    // 这样方便传参，并且还能利于所有状态统一管理，便于判断游戏胜负
    renderSquare(i) {
        return (
            <Square 
                data={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
            />
        )
    }
   
    render(){
        return (
            <React.Fragment>
                <h2 style={{textAlign:'center', fontSize:'64px'}}>井字棋案例</h2>
                <div style={{textAlign: 'center', fontSize:'32px'}}></div>
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