import React, {Component, Fragment} from 'react';
import './app.css'
import CardList from '../../components/card/cardlist'
import SearchBox from '../../components/search/searchbox';
import Scroll from '../../components/scroll/scroll'
// import {robots} from "../objects/robots";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount() {
        // this.setState({robots: robots});
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
          return response.json();
        }).then(users => {
            this.setState({robots: users});
        })
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else
            return (
                <Fragment>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}></CardList>
                    </Scroll>
                </Fragment>
            )
    }


}
