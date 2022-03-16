import React, {Component} from "react";

export default class Ride extends Component {

    displayArray() {
        let result = "["
        for (let i in this.props.stationPath) {
            if ((this.props.stationPath.length - i) == 1) {
                result += ` ${this.props.stationPath[i]}`
            } else{
                result += ` ${this.props.stationPath[i]}, `
            }
        }
        result += "]"
        return result
    }

    render() {
        return (
            <div className='container'>
                <div className="col-sm-12 bg-black bg-opacity-75 border-4 border-dark text-white m-3"
                     style={{borderRadius: '5px'}}>
                    <div className='col-12 p-3'>
                        <div className='col-5'>
                            <img src={this.props.src} alt=""/>
                        </div>
                        <div className="col-7">
                            <label className='d-block'> Ride id: <span>  {this.props.id} </span></label>
                            <label className='d-block'>Origin station: <span> {this.props.originStation}  </span>
                            </label>
                            <label className='d-block'>Station path: <span> {this.displayArray()}  </span> </label>
                            <label className='d-block'>Date: <span>  </span> {this.props.date} </label>
                            <label className='d-block'>Distance: <span> {this.props.distance} </span> </label>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}