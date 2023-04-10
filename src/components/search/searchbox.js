import React, {Component} from "react";
import './searchbox.css'

export default class SearchBox extends Component {
    render(searchField, searchChange = this.props.searchChange) {
        return(
            <div className='Input'>
                <input type='search' placeholder='Search Robots' onChange={searchChange}/>
            </div>
        )
    }
}
