import React from "react";
import Select from "react-select";

var tabDataCity = []
var tabDataState = []

export class Filter extends React.Component {


    renderStateFilter() {
        return this.props.state.map((item, index) => {
            return (
                tabDataState.push({value: item, label: item})
            )
        })
    }


    renderCityFilter() {
        return this.props.city.map((item, index) => {
            return (
                tabDataCity.push({value: item, label: item})
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
                        title="Filter rides either by state or by city" style={{cursor: 'pointer', borderRadius: '5px'}}
                        onClick={this.props.onFilter}>Filter
                </button>

                <div className='card  text-white border-0' style={{width: '150px', background: '#323131'}}>
                    <span className='card-title'></span>


                    <div className='row'>
                        <span className='d-none'>{this.renderCityFilter()} </span>
                        <Select

                            name='City'
                            options={tabDataCity}
                            placeholder='City'
                            onChange={this.props.onTypeFilter}></Select>
                    </div>
                    <div className='row'>
                        <span className='d-none'>{this.renderStateFilter()} </span>
                        <Select
                            name='State'
                            options={tabDataState}
                            placeholder='State'
                            onChange={this.props.onTypeFilter}></Select>
                    </div>
                </div>

            </div>

        )
    }
}

