import React from 'react';
import ReactDOM from 'react-dom';

function ListItem (props){
    return (
        <li>{props.value}</li>
    )
}

function NumberList (props){
    const number = props.numbers

    return (
        <ul>
            number.map((item)=>{
                <ListItem key={number.toString()} value={number}/>
            })
        </ul>
    )
}

const numbers = [1,2,3,4,5,6]

ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);