import React from "react"

const Friend = (props) => (
    <div className="friend-cont">
        <h2>Hi my name is {props.name} and I'm {props.age} years old!</h2>
        <h2>My pets are:</h2>
        <h4>{props.pets}</h4>
        <hr />
    </div>
)

export default Friend