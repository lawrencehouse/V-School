import { Component } from 'react';
import './App.css';

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
        

        return (
            <div className="App">
                <button onClick={this.diceRoll}>Roll Dice</button>
            </div>
          )
    }
}

export default App;