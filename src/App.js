import React from 'react';
import './App.css';
import CityTemp from "./components/CityTemp";
function App () {
    const date=new Date()
    const day=date.getDay()
    const month=date.getDate()
    const year=date.getFullYear()

    return (
        <div className="App" >
            <div className="main" >
                <h2 >{day}/{month}/{year}</h2>
                <div className="title-container">
                    <time style={{marginTop:"-5vh"}}/>
                    <CityTemp/>
                </div>
            </div>
        </div>
    )
}

export default App;
