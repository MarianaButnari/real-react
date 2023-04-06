import React, {Component} from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Omnomomdovmdvo</h1>
                <p>{this.props.greeting}</p>
            </div>
        );
    }
}
// export default Hello;


// Classes are just functions it will have the same result as the class above
// const Hello = (props) => {
//     return(
//         <div>
//             <h1>Hello</h1>
//             <p>{props.greeting}</p>
//         </div>
//     )
// }
// export default Hello;
