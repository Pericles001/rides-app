import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {rides} from "./rides";
import {user} from "./user";
import {NavBar} from "./components/header";
import {Filter, tabDataCity, tabDataState} from "./components/filter";
import {Widget} from "./components/widget";
import Ride from "./components/ride";
import './App.css'

export default class App extends Component {
    state = {
        user,
        rides,
        state: tabDataState,
        city: tabDataCity,
    }

    handleCityChange = (city) => {
        this.setState({
            city: city
        })
        console.log(city.value)
    }


    handleStateChange = (state) => {
        this.setState({
            state: state

        })
        console.log(state.value)
    }


    filter = () => {
        const {rides, state, city} = this.state;
        const filteredRides = rides.filter(ride => {
            return ride.state === state.value && ride.city === city.value
        })
        console.log(filteredRides)
        this.setState({
            rides: filteredRides
        })
    }


    render() {
        return (
            <React.Fragment>
                <NavBar/>

                <Widget/>

                <Filter city={this.state.rides.map(
                    ride => ride.city
                )} state={this.state.rides.map(
                    ride => ride.state
                )} onFilter={this.filter} onStateChange={this.handleStateChange} onCityChange={this.handleCityChange}/>


                {
                    this.state.rides.map(
                        (ride, index) => (
                            <Ride key={ride.id} id={ride.id} originStation={ride.origin_station_code}
                                  stationPath={ride.station_path}
                                  date={ride.date} distance={ride.destination_station_code - ride.origin_station_code}
                                  src={ride.map_url} cityName={ride.city} stateName={ride.state}/>
                        )
                    )
                }
            </React.Fragment>
        )
    }
}

