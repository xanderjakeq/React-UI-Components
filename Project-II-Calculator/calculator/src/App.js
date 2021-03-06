import React, {Component} from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      inputVal: ''
    }

    this.input = this.input.bind(this)
    this.clear = this.clear.bind(this)
    this.calculate = this.calculate.bind(this)
  }

  input(val){
    this.setState(prevState => {
      return {inputVal: `${prevState.inputVal}${val}`}
    })
  }

  clear(op){
    if(op === 'clear'){
      this.setState({
        inputVal: ''
      })
    }else if(op === '='){
      this.calculate()
    }else{
      this.setState( prevState =>{
        return {inputVal: `${prevState.inputVal}${op}`}  
      })
    }    
  }

  calculate(){
    // process input for calculation
  }

  render(){
    return (
      <div className = "container">
        
        <CalculatorDisplay value = {this.state.inputVal}/>

        <div className="innerContainer">
          <div className = "clearAndNumbers">
            <ActionButton style = "white" onClick ={this.clear} op = "clear" />
            <div>
              <NumberButton style = "white" onClick = {this.input} num = {1}/>
              <NumberButton style = "white" onClick = {this.input} num = {2}/>
              <NumberButton style = "white" onClick = {this.input} num = {3}/>
              <NumberButton style = "white" onClick = {this.input} num = {4}/>
              <NumberButton style = "white" onClick = {this.input} num = {5}/>
              <NumberButton style = "white" onClick = {this.input} num = {6}/>
              <NumberButton style = "white" onClick = {this.input} num = {7}/>
              <NumberButton style = "white" onClick = {this.input} num = {8}/>
              <NumberButton style = "white" onClick = {this.input} num = {9}/>
            </div>
            <NumberButton style = "white" onClick = {this.input} num = {0}/>
          </div>

        <div className = "ops">
          <ActionButton style = "red" onClick ={this.clear} op = "/"/>
          <ActionButton style = "red" onClick ={this.clear} op = "*"/>
          <ActionButton style = "red" onClick ={this.clear} op = "-"/>
          <ActionButton style = "red" onClick ={this.clear} op = "+"/>
          <ActionButton style = "red" onClick ={this.clear} op = "="/>
        </div>

        </div>

      </div>
    );
  }
};

export default App;
