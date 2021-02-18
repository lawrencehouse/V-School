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
            colors: ['white', 'white', 'white', 'white']
        }
    }

    render() {
        const squares = this.state.colors.map(color => <Square color={this.state.color}/>)
        

        return (
            <div>
                {squares}
            </div>
        )
    }
}

export default App;
