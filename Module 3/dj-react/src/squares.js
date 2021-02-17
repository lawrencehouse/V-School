import Component from 'react'

class Square extends Component {
    constructor() {
        super()
        this.state = {
            colors: ['white', 'white', 'white', 'white']
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.colors}</h1>
            </div>
        )
    }
}