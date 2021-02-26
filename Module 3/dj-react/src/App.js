import './App.css';
import Square from './squares'
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1 className='square'></h1>
//       <h1 className='square'></h1>
//       <h1 className='square'></h1>
//       <h1 className='square'></h1>
//     </div>
//   );
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            colors: ['white', 'black', 'blue', 'white']
        }
        this.djSmall = this.djSmall.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.leftBlue = this.leftBlue.bind(this)
        this.rightBlue = this.rightBlue.bind(this)
    }

    djSmall() {
        this.setState(prevState => {
            if (prevState.colors[0] == 'white') {
                return {
                    colors: ['black', 'black', 'black', 'black']
                }
            } else {
                return {
                    colors: ['white', 'white', 'white', 'white']
                }
            }
        })
    }

    partyDJ() {
        this.setState(prevState => {
            return {
                colors: ['purple', 'purple', prevState.colors[2], prevState.colors[3]]
            }
        })
    }

    leftBlue() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], 'blue', prevState.colors[3]]
            }
        })
    }

    rightBlue() {
        this.setState(prevState => {
            return {
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], 'blue']
            }
        })
    }

    render() {
        const squares = this.state.colors.map(color => <Square color={color}/>)
        
        return (   
            <div className="App">
                {squares}
                <button onClick={this.djSmall}>DJ Small</button>
                <button onClick={this.partyDJ}>Party DJ</button>
                <button onClick={this.leftBlue}>Left Blue</button>
                <button onClick={this.rightBlue}>Right Blue</button>
            </div>
        )
    }
}

export default App;