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
    }

    djSmall() {
        this.setState(prevState => {
            return {
                colors: prevState.count + 1
            }
        })
    }

    render() {
        const squares = this.state.colors.map(color => <Square color={color}/>)
        
        return (   
            <div className="App">
                {squares}
                <button>DJ Small</button>
                <button>Party DJ</button>
                <button>Left Blue</button>
                <button>Right Blue</button>
            </div>
        )
    }
}

export default App;