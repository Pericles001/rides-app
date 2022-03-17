import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {rides} from "./rides";
import {user} from "./user";
import {NavBar} from "./components/Header";
import {Filter, tabDataCity, tabDataState} from "./components/Filter";
import {Widget} from "./components/Widget";
import Ride from "./components/Ride";
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
    }


    handleStateChange = (state) => {
        this.setState({
            state: state

        })
    }


    filter = () => {
        const {rides, state, city} = this.state;
        const filteredRides = rides.filter(ride => {
            return ride.state === state.value && ride.city === city.value
        })
        this.setState({
            rides: filteredRides
        })
    }

    handlePastRides = () => {

        let {rides, counter1} = this.state;

        const pastRides = rides.filter(ride => {
            let intOldDate = ride.date.split(/[/" "]+/);
            let oldDate = new Date(intOldDate[2], intOldDate[0] - 1, intOldDate[1]);
            let oD = oldDate.getTime();
            let intNewDate = new Date().getTime();

            return oD < intNewDate
        })
        console.log(pastRides)
        this.setState({
            rides: pastRides
        })
        counter1 = pastRides.length;
        this.setState({
            counter1: counter1 == 0 ? 1 : counter1
        })
        return counter1;

    }

    handleUpComing = () => {

        let {rides, counter2} = this.state;
        const upComing = rides.filter(ride => {
            let intOldDate = ride.date.split(/[/" "]+/);
            let oldDate = new Date(intOldDate[2], intOldDate[0] - 1, intOldDate[1]);
            let oD = oldDate.getTime();
            let intNewDate = new Date().getTime();
            return oD > intNewDate
        })

        console.log(upComing)
        this.setState({
            rides: upComing
        })

        counter2 = upComing.length;
        this.setState({
            counter2: counter2 == 0 ? 1 : counter2
        })
        return counter2;
    }

    render() {
        return (
            <React.Fragment>
                <NavBar/>

                <Widget count1={this.state.counter1} count2={this.state.counter2} upcoming={this.handleUpComing}
                        past={this.handlePastRides}/>

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

