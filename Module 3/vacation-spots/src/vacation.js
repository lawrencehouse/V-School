import React from "react"

const Card = (props) => {
    // if (props.price < 500) {
    //     "$"
    // } else if (props.price < 1000) {
    //     "$$"
    // } else {
    //     "$$$"
    // }
    return (
        <div className="vacay-card">
            <h1>Escape away to <b><i>{props.place}</i></b>!</h1>
            <h2>Cost: {props.price}</h2>
            <h2>The best time to go is in {props.goTime}</h2>
        </div>
    )
}

export default Card