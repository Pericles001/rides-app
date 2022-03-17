import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {rides} from "./rides";
import {user} from "./user";
import {NavBar} from "./components/header";
import {Filter} from "./components/filter";
import Ride from "./components/ride";
import './App.css'

export default class App extends Component {

    state = {
        user,
        rides
    }


    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <Filter city={this.state.rides.map(
                    ride=>ride.city
                )} state={this.state.rides.map(
                    ride=>ride.state
                )} />


                {
                    this.state.rides.map(
                        (ride, index) => (
                            <Ride key={ride.id} id={ride.id} originStation={ride.origin_station_code} stationPath={ride.station_path}
                                  date={ride.date} distance={ride.destination_station_code - ride.origin_station_code}
                                  src={ride.map_url} cityName={ride.city} stateName={ride.state}/>
                        )
                    )
                }
            </React.Fragment>
        )
    }
}

