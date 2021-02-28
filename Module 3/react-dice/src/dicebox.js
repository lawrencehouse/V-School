import { Component } from "react";

class Dicebox extends Component {
    constructor() {
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

    
}

export default Dicebox