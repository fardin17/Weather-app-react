import React, {Component} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearchLocation,faMapMarked} from '@fortawesome/free-solid-svg-icons'
class CityTemp extends Component {
    constructor() {
        super()
        this.state={
            wdata:{city:'',scity:'',id:'',weather:'',cutemp:'',mintemp:'', maxtemp:'',}

        }
    }
    clickHandler=(e)=>{
        e.preventDefault()
        let city=this.state.city
        this.setState({scity:this.state.city})
        axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=c7846c9fd56acfd8819cc12b6f5ac240&units=metric')
            .then(response=>{
                this.setState({
                    id:response.data.weather[0].id,
                    weather:response.data.weather[0].description,
                    cutemp:response.data.main.temp,
                    mintemp:response.data.main.temp_min,
                    maxtemp:response.data.main.temp_max,

                })

            })
            .catch(err=>{
                console.log(err.message)
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>
                        <FontAwesomeIcon icon={faMapMarked} color="white"> </FontAwesomeIcon>
                            {this.state.scity}

                    </h1>
                    <h3>{this.state.cutemp}&deg;c</h3>
                </div>
                <div>
                    <form className="form-container">
                        <input type='text' onChange={(e)=>this.setState({city:e.target.value})}
                               placeholder='City Name' value={this.state.city} required/>
                        <button onClick={this.clickHandler}>
                            <FontAwesomeIcon icon={faSearchLocation} color="white"> </FontAwesomeIcon>
                        </button>
                    </form>
                    <p>Weather: {this.state.weather}</p>
                    <p>Minimum Temp: {this.state.mintemp}&deg;c</p>
                    <p>Maximum Temp: {this.state.maxtemp}&deg;c</p>
                </div>
            </div>

        );
    }
}

export default CityTemp;