import { Component } from 'react';
import './App.css';
import DiceBox from './dicebox'

class App extends Component {
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.diceRoll = this.diceRoll.bind(this)
    }

    diceRoll() {
        this.setState(prevState => {
            
        })
    }

    render() {
        
        const dice = <DiceBox
        return (
            <div className="App">
                <button onClick={this.diceRoll}>Roll Dice</button>
                {DiceBox}
            </div>
          )
    }
}

export default App;