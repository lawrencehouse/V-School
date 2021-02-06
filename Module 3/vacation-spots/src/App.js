import React from "react"
import './App.css';
import vacationSpots from "./vacationspots"
import Card from "./vacation"

function App() {
    const Vacation = vacationSpots.map(spot => <Card place={spot.place} goTime={spot.timeToGo} price={spot.price} />)
    return (
        <div className="App">
            {Vacation}
        </div>
    );
}

export default App;
