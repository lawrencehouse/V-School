import React from "react"
import friends from "./Friends"
import Friend from "./Friend"
import Pet from "./Pet"

function App() {
    const FriendList = friends.map(friend => 
    <Friend 
        name={friend.name} 
        age={friend.age} 
        pets={friend.pets.map(pet => 
        <Pet 
            pname={pet.name} 
            breed={pet.breed} 
        />)} 
    />)
    return (
        <div>
            {FriendList}
        </div>
    )
}

export default App;