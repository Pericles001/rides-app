import React, {useState} from "react";
import {prettyFormat} from "@testing-library/react";

let elem1, elem2 = []

export class Filter extends React.Component {

    renderStateFilter() {
        return this.props.state.map((item, index) => {
            return (
                <option key={index} value={item}>{item}</option>
            )
        })
    }


    renderCityFilter() {
        return this.props.city.map((item, index) => {
            return (
                <option key={index} value={item}>{item}</option>
            )
        })
    }


    render() {


        return (
            <div className='float-end me-3 mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                     className="bi bi-text-indent-right me-2 " viewBox="0 0 16 16">
                    <path
                        d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <button type='btn' className='text-white btn btn-sm btn-dark border-0'
                        data-bs-toggle="tooltip" data-bs-placement="top"
                        title="Filter rides either by state or by city" style={{cursor: 'pointer'}}>Filter
                </button>

                <div className='card  text-white border-0' style={{width: '150px', background: '#323131'}}>
                    <span className='card-title'></span>
                    <select className='bg-dark text-white border-dark border-0 m-2' style={{borderRadius: '5px'}}
                            name='State'>
                        {this.renderStateFilter()}
                    </select>
                    <select className='bg-dark text-white border-dark border-0 mt-2' name='City'>
                        {this.renderCityFilter()}
                    </select>
                    <div className='row'>

                    </div>
                </div>

            </div>

        )
    }
}

