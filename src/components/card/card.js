import React, {Component} from 'react';
import './card.css'

export default class Card extends Component {
    render() {
    const {id, name, email} = this.props;
        return (
            <div className="Card">
                <img alt='photo' src={`https://robohash.org/${id}`} />
                <div className='Details'>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}
