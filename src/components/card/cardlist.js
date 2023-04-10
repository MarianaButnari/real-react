import React, {Component} from 'react';
import './cardlist.css'
import Card from './card'


export default class CardList extends Component {
    render(robots = this.props.robots) {
        // const cardComponent = this.props.robots.map((user, index) => {
        //     return <Card key={this.props.robots[index].id}
        //                  id={this.props.robots[index].id}
        //                  name={this.props.robots[index].name}
        //                  email={this.props.robots[index].email}
        //     />
        // });
        // if (true) {
        //     throw new Error('OOOOOOMMMGGGG');
        // }
        return (
            <div className="CardList">
                {/*{cardComponent}*/}
                {robots.map((user, index) => {
                    return <Card key={robots[index].id}
                                 id={robots[index].id}
                                 name={robots[index].name}
                                 email={robots[index].email}
                    />
                })}
            </div>
        );
    }
}
