import React from "react"
import friends from "./Friends"
import Friend from "./Friend"

function App() {
    const FriendList = friends.map(friend => <Friend name={friend.name} age={friend.age} />)
    return (
        <div>
            {FriendList}
        </div>
    )
}

export default App;