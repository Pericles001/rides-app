import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './widget.css';

export class Widget extends Component {
    render() {
        return (
            <div className='mt-4 ms-4'>
                <p>
                    <a className="fork border-0 border-bottom border-light m-2"
                       style={{color: 'white', textDecoration: 'none',}} role="button"
                    >
                        Nearest rides
                    </a>
                    <a className="fork border-0 border-bottom border-light m-2"
                       style={{color: 'white', textDecoration: 'none'}} type="button" onClick={this.props.upcoming}>
                        Upcoming rides ({this.props.count2})
                    </a>

                    <a className="fork border-0 border-bottom border-light m-2"
                       style={{color: 'white', textDecoration: 'none',}} type="button" onClick={this.props.past}>
                        Past rides ({this.props.count1})
                    </a>
                </p>

            </div>
        )
    }
}