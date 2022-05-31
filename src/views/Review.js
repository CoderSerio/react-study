import React from 'react'
import {Component} from "react"


let questions = [
    {
        title: '123',
        content: 
        `hhhhhhhh`
    },
   
]
class Review extends Component {
    render () {
       return (
            <React.Fragment>
                <div>
                    毛概复习
                    {questions.map(one => {
                        return <div style={{border:'1px solid #333', borderRadius:'10px', margin:'10px'}}>
                            <h5>{one.title}</h5>
                            <div>{one.content}</div>    
                        </div>
                        
                    })}
                </div>
            </React.Fragment>
       )
    }
}

export default Review