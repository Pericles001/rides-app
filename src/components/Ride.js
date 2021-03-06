import React, {Component} from "react";

export default class Ride extends Component {

    displayStationPath() {
        let result = "["
        for (let i in this.props.stationPath) {
            if ((this.props.stationPath.length - i) === 1) {
                result += ` ${this.props.stationPath[i]}`
            } else {
                result += ` ${this.props.stationPath[i]}, `
            }
        }
        result += "]"
        return result
    }

    render() {

        return (

            <div className='container mt-5 ms-4'>
                <div className="col-sm-12 bg-black bg-opacity-75 border-4 border-dark text-white m-3"
                     style={{borderRadius: '5px'}}>
                    <div className='col-12 p-1'>
                        <div className="row">
                            <div className='col-4'>
                                <img src={this.props.src} alt=""/>
                            </div>
                            <div className="col-4">
                                <label className='d-block'> Ride id: <span>  {this.props.id} </span></label>
                                <label className='d-block'>Origin station: <span> {this.props.originStation}  </span>
                                </label>
                                <label className='d-block'>Station path: <span> {this.displayStationPath()}  </span>
                                </label>
                                <label className='d-block'>Date: <span>  </span> {this.props.date} </label>
                                <label className='d-block'>Distance: <span> {this.props.distance} </span> </label>

                            </div>
                            <div className="col-4 d-inline">
                                <button type='btn'
                                        className='btn btn-sm btn-dark btn-outline-dark m-2 text-white'> {this.props.cityName} </button>

                                <button type='btn'
                                        className='btn btn-sm btn-dark btn-outline-dark text-white'> {this.props.stateName} </button>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        )
    }
}