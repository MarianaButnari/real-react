import React, {Component, Fragment} from 'react';
import Card from './Card'


export default class CardList extends Component {
    render() {
        const cardComponent = this.props.robots.map((user, index) => {
            return <Card key={this.props.robots[index].id} id={this.props.robots[index].id} name={this.props.robots[index].name}
                         email={this.props.robots[index].email}/>
        });
        return (
            <Fragment>
                {cardComponent}
            </Fragment>
        );
    }
}
