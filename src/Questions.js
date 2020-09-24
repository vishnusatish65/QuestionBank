import React, { Component } from 'react'
import axios from 'axios'


class Questions extends Component {
    constructor(){
        super()
        this.state = {
            array:[],
           question_number  : 0,
           score : 0,
        }

    }
    next () {
        this.setState(state => (
            {question_number : state.question_number + 1   
        }));
    }

    previous(){
        this.setState(
            {question_number: this.state.question_number - 1,
            }
        )
    }

    check(id){
        if (id === this.state.array[this.state.question_number]["answer"]){
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
    
    componentDidMount(){
        axios.get('http://127.0.0.1:5000/').then(response => {
            this.setState({array:response.data })
        }).catch(error =>{console.log("Something is wrong")})
    }

    render() {
        if (this.state.array.length > 0){
            const { array, question_number, } = this.state
            if (this.state.finished !== true ){
                return (  
                    <div> 
                        <h1>Questions</h1>
                        <div>
                        <p>{array[question_number]["question"]}</p>
                        {array[question_number]["options"].map(item=> ((<div><button onClick = {()=>this.check(item[0])}className={"btn btn-success"} id = {item[0]}>{item[0]}</button><br></br><br></br></div>)))}
                        <br></br>
                        <br></br> 
                        {question_number > 0 && <button onClick={()=> this.previous()} className={"btn btn-danger space" } >Previous</button>}
                        {question_number < array.length-1 && <button onClick={()=> this.next()} className={"btn btn-dark space2"} >Next</button>}
                        {question_number === array.length-1 && <button onClick={()=> this.finish()} className={"btn btn-dark space2"} >Finish</button>} 
                        </div>
                    </div>
                )
            }else{return(<div><h1>Test complete. Your score is {this.state.score}</h1></div>)}
        }else{return(null)}
    }      
}

export default Questions
