import React, {useState, useEffect, Fragment} from 'react';
import './app.css'
import CardList from '../../components/card/cardlist'
import SearchBox from '../../components/search/searchbox';
import Scroll from '../../components/scroll/scroll'
import Error from '../../components/error/error'
// import {robots} from "../objects/robots";

// export default class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             robots: [],
//             searchField: ''
//         }
//     }
//
//     componentDidMount() {
//         // this.setState({robots: robots});
//         fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//             return response.json();
//         }).then(users => {
//             this.setState({robots: users});
//         })
//     }
//
//     onSearchChange = (event) => {
//         this.setState({searchField: event.target.value});
//     }
//
//     render() {
//         const {robots, searchField} = this.state;
//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchField.toLowerCase());
//         });
//         return !robots.length ? <h1>Loading...</h1> : (
//             <Fragment>
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <Scroll>
//                     <Error>
//                         <CardList robots={filteredRobots}></CardList>
//                     </Error>
//                 </Scroll>
//             </Fragment>
//         )
//     }
// }


//HOOKS
export default function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setRobots(users)
            });
    console.error(count);
    }, [count])

    function onSearchChange(event) {
        setSearchField(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? <h1>Loading...</h1> : (
        <Fragment>
            <h1>RoboFriends</h1>
            <button onClick={() => setCount(count+1)}>Click Me</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <Error>
                    <CardList robots={filteredRobots}></CardList>
                </Error>
            </Scroll>
        </Fragment>

    )
}
