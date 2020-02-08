import React from 'react';

// function car() {
//     return (
//         <div>Car component</div>
//     )
// }

// const car = () => {
//     return (
//         <div>Car component</div>
//     )
// };

// const car = () => (
//     <div>
//         Car component
//         <strong>test</strong>
//     </div>
// );

export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        {props.children}
    </div>
)
