// import React, {Component, useState, useEffect, Fragment} from 'react';
import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import CardList from '../../components/card/cardlist'
import SearchBox from '../../components/search/searchbox';
import Scroll from '../../components/scroll/scroll'
import Error from '../../components/error/error'
// import {robots} from "../objects/robots";
import {setSearchField, requestRobots} from "../../actions";
import './app.css'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    // constructor() {
    //     super();
        // this.state = {
        //     robots: [],
            // searchField: ''
        // }
    // }

    componentDidMount() {
        this.props.onRequestRobots();
        // this.setState({robots: robots});
        // fetch('https://jsonplaceholder.typicode.com/users').then(response => {
        //     return response.json();
        // }).then(users => {
        //     this.setState({robots: users});
        // })
    }

    // onSearchChange = (event) => {
    //     this.setState({searchField: event.target.value});
    // }
    render() {
        // const {robots} = this.state;
        const {searchField, onSearchChange, robots, isPending} = this.props
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending ? <h1>Loading...</h1> : (
            <Fragment>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <Error>
                        <CardList robots={filteredRobots}></CardList>
                    </Error>
                </Scroll>
            </Fragment>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

//HOOKS
// export default function App() {
//     const [robots, setRobots] = useState([]);
//     const [searchField, setSearchField] = useState('');
//     const [count, setCount] = useState(0);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => {
//                 setRobots(users)
//             });
//     console.error(count);
//     }, [count])
//
//     function onSearchChange(event) {
//         setSearchField(event.target.value);
//     }
//
//     const filteredRobots = robots.filter(robot => {
//         return robot.name.toLowerCase().includes(searchField.toLowerCase());
//     });
//
//     return !robots.length ? <h1>Loading...</h1> : (
//         <Fragment>
//             <h1>RoboFriends</h1>
//             <button onClick={() => setCount(count+1)}>Click Me</button>
//             <SearchBox searchChange={onSearchChange}/>
//             <Scroll>
//                 <Error>
//                     <CardList robots={filteredRobots}></CardList>
//                 </Error>
//             </Scroll>
//         </Fragment>
//
//     )
// }
