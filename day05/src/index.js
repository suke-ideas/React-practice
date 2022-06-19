// day 05: 19/6/2022

/*
## Exercises: Level 1

1. What is props in a React component ?
=> props is a special keyword in React that stands for properties and is being used to pass 
data from one component to another and mostly from parent component to child component.
We can say props is a data carrier or a means to transport data.

2. How do you access props in a React component ?

3. What data types can we pass as props to components ?
=> string, number, booleans, array, object,function

4. What is a propTypes?
=> propTypes package help us to assign the data types of the props we passed to a component

5. What is a default propTypes?
=> default propTypes can be used when we want to have some default prop types for a component

*/

import React from 'react';
import ReactDOM from 'react-dom/client';

let Heading = () => (
    <div>
        <h1 style = {{textAlign: 'center'}}>30 Days Of React</h1>
        <h3 style = {{textAlign: 'center', fontWeight: 'lighter'}}>Number Generator</h3>
    </div>
)
let random = () => Math.floor(Math.random()*225)

let numbers = []

for (let i = 0; i < 400 ;i++) {
    let num = random()
    if (! numbers.includes(num)) {
        numbers.push(num)
    }
}

let prime = (num) => {
    if (num===1) {
        return false;
    }
    for (let i = 2; i<=Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}


let listNumbers = numbers.map((num) => {
    let bgColor = ''
    if (prime(num)) {
        bgColor = 'green'
    } else
    if (num % 2) {
        bgColor = 'yellow'
    } else {
        bgColor = 'coral'
    }
    let styleLi = {
        backgroundColor: `${bgColor}`, 
        padding: '12px 12px',
        border: 'solid 1px #ccc'   ,
        width: '40px',
        height: '40px',
        textAlign: 'center',
        margin: '4px 4px'
    
    }
    return (
        <li key = {num} style = {styleLi}>
            {num}
        </li>
    )
})

let styleUl = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
}

let RandomNumber = () => (
    <div className='number-generator' style = {{
        padding: '0px 24px'
    }}>
        <ul style = {styleUl} >
            {listNumbers}
        </ul>
    </div>
)

const App = () => (
    <div className='app'>
        <Heading/>
        <RandomNumber/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)


