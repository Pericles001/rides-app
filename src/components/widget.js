import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './widget.css';

export class Widget extends Component{
    render(){
     return(
         <div className='mt-4 ms-4'>
             <p>
                 <a className="fork border-0 border-bottom border-light m-2" style={{color:'white' , textDecoration:'none',  }} data-bs-toggle="collapse" href="#collapseExample" role="button"
                    aria-expanded="false" aria-controls="collapseExample">
                     Nearest rides
                 </a>
                 <a className="fork border-0 border-bottom border-light m-2" style={{color:'white' , textDecoration:'none'}}  type="button" data-bs-toggle="collapse"
                         data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                     Upcoming rides
                 </a>

                 <a className="fork border-0 border-bottom border-light m-2" style={{color:'white' , textDecoration:'none', }}  type="button" data-bs-toggle="collapse"
                         data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                     Past rides
                 </a>
             </p>
             <div className="collapse" id="collapseExample">
                 <div className="card card-body">
                     Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                     the user activates the relevant trigger.
                 </div>
             </div>
         </div>
     )
    }
}