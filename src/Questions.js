import React, { Component } from 'react'


class Questions extends Component {

    
    constructor(){
        super()
        this.state = {
           question_number  : 0,
           data : ""
        }

    }
    next () {
        this.setState(state => (
            {question_number : state.question_number + 1   
        }));
    }

    previous(){
        this.setState(
            {question_number: this.state.question_number - 1}
        )
    }
    // componentDidMount(){
        
    // }

    array = [{"question" : "This is your first question", "options" : ["a","b","c","d"]},{"question" : "This is your second question", options : ["e","f","g","h"]}]
    render() {
        return (
            <div>
                <h1>Questions</h1>
                <div>
                    <p>{this.array[this.state.question_number]["question"] && this.array[this.state.question_number]["question"]}</p>
                    <select>
                        {this.array[this.state.question_number]["options"].map(item=> (<option>{item}</option>))}
                    </select>
                    <br></br>
                    <br></br>
                    <button onClick={()=> this.previous()} className={"btn btn-danger space" } >Previous</button>
                    <button onClick={()=> this.next()} className={"btn btn-dark space2"} >Next</button>
                    

                </div>
                
            </div>
        )
    }
}

export default Questions
