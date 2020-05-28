import React from 'react';
import './App.css';
import CityTemp from "./components/CityTemp";
import night from './components/Image/night.svg'
import day from './components/Image/day.svg'
function App () {
    const date=new Date()
    const month=date.getMonth()
    const tarikh=date.getDate()
    const year=date.getFullYear()
    const hour=date.getHours()

    return hour>6&&hour<18? (
        <div className="App" >
            <div className="main" style={{ backgroundImage:' url('+day+')'}} >
                 <h2 style={{color:'midnightblue'}}> {tarikh} - {month+1} - {year}</h2>
                <div className="title-container">
                    <CityTemp/>
                </div>
            </div>
        </div>
    ):
        <div className="App" >
            <div className="main" style={{ backgroundImage:' url('+night+')'}} >
                <h2 style={{color:'white'}} > {tarikh} - {month+1} - {year}</h2>
                <div className="title-container">
                    <CityTemp/>
                </div>
            </div>
        </div>

}

export default App;
