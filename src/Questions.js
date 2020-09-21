import React, { Component } from 'react'


class Questions extends Component {
    constructor(){
        super()
        this.state = {
           question_number  : 0,
           score : 0,
           finished : false
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

    check(id){
        if (id === this.array[this.state.question_number]["answer"]){
            this.setState(
                {score : this.state.score + 1}
            )
        }
        
    }

    finish(){
        this.setState(
            {finished : true}
        )
    }
 
    array = [{"question" : "This is your first question", "options" : ["a: Very good","b:-could do better","c: need to improve","d:Fails"], "answer":"a"},{"question" : "This is your second question", options : ["e","f","g","h"],"answer":"g"},{"question" : "This is your third question", options : ["i","j","k","l"],"answer":"j"}]
    render() {
        if (this.state.finished !== true ){
            return (  
                <div>
                    <h1>Questions</h1>
                    <div>
                        <p>{this.array[this.state.question_number]["question"]}</p>
                            {this.array[this.state.question_number]["options"].map(item=> ((<div><button onClick = {()=>this.check(item[0])}className={"btn btn-success"} id = {item[0]}>{item}</button><br></br><br></br></div>)))}
                        <br></br>
                        <br></br>
                        {this.state.question_number > 0 && <button onClick={()=> this.previous()} className={"btn btn-danger space" } >Previous</button>}
                        {this.state.question_number < this.array.length-1 && <button onClick={()=> this.next()} className={"btn btn-dark space2"} >Next</button>}
                        {this.state.question_number === this.array.length-1 && <button onClick={()=> this.finish()} className={"btn btn-dark space2"} >Finish</button>}
                    </div>
    
                </div>
            )

        }else{return(<div><h1>Test complete. Your score is {this.state.score}</h1></div>)}
    
       
    }
}

export default Questions
