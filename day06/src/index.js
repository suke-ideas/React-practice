// day 06: 19/6/2022

/*
## Exercises: Level 1

1. Why you need to map an array ?
=> to modify an array to list of jsx by adding a certain HTML elements to 
each element of an array

2. Why we need keys during mapping an array ?
=> to identify items which have changed, added, or removed 
help elements a stable identify, key should be unique

3. What is the importance of destructuring your code ?
=> help our code become more easy to read

4. Does destructuring make your code clean and easy to read ?
=> yes, of course

## Exercises: Level 2

1.Make the following bar group using the given 

*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import {tenHighestPopulation} from './ten_most_highest_populations'

let Heading = () => (
  <header>
    <div style = {{textAlign: 'center'}}>
      <h1>30 Days Of React</h1>
      <h2>World Population</h2>
      <h4>Ten most populated countries</h4>
    </div>
  </header>
)


let indexWorld = tenHighestPopulation.filter((item) => item.country === 'World')
let worldPop = indexWorld[0].population

let Items = ({item:{country,population}}) => {

  // style
  let styleUl = {
    display: 'flex',
    listStyle: 'none',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
  let marginR = 800 - 800*(1.0*population/worldPop)
  let w = 800*(population*1.0/worldPop)
  let styleShow = {
    backgroundColor: 'coral',
    height: '24px',
    maxWidth: '800px',
    width: `${w}px`,
    marginLeft: '16px',
    marginRight: `${marginR}px`
  }
  console.log(marginR,w)

  let styleName = {
    width: '100px',
    backgroundColor: '#ccc',
    marginLeft: '400px'
  }

  let styleFigure = {
    backgroundColor: '#76A8',
    width: '100px'
    
  }

  let name = <li style = {styleName} key = {country} >{country}</li>
  let i = 0
  let showPercent = <li key = {i++} style = {styleShow} ></li>
  let figure = <li style = {styleFigure} key = {population}>{population}</li>

  return (
    <ul style = {styleUl}>
      {name}
      {showPercent}
      {figure}
    </ul>
  )
}

let Graph = ({tenHighestPopulation}) => {
    let stt = 0
    let list = tenHighestPopulation.map((item) => (
      <Items item = {item} key = {stt++}/>
    ))

    let styleGrap = {
      display: 'flex',
      flexDirection: 'column'
    }

    return (
      <div style = {styleGrap}>
        {list}
      </div>
    )
}

const App = () => (
  <div className='app' >
    <Heading/>
    <Graph tenHighestPopulation={tenHighestPopulation}/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

