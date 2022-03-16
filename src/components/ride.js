import React, {Component} from "react";


export default class Ride extends Component{
    render(){
        return(
        <div className='container'>
            <div className="col-sm-12 bg-black bg-opacity-75 border-4 border-dark text-white m-3" style={{borderRadius:'5px'}}>
                <div className='col-12 p-3' ><label className='d-block'> Ride id: <span>  </span></label>

                    <map className='col-5' ></map>
                    <div className="col-7">

                        <label className='d-block' >Origin station: <span>  </span> </label>
                        <label className='d-block' >Station path: <span>  </span>  </label>
                        <label className='d-block' >Date: <span>  </span>  </label>
                        <label className='d-block' >Distance: <span> </span>  </label>

                    </div>
</div>
            </div>

        </div>
            )
    }
}