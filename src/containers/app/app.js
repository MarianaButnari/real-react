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
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? <h1>Loading...</h1> : (
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
