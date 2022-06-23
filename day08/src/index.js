// day 08: 23/6/2022

// 1. Use React state to change the background of the page. You can use this technique to apply a dark mode for your portfolio.

/*
import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import asanabeh from './images//asabeneh.jpg'

class Header extends Component {
  constructor (props) {
    super (props)
    
  }
  
  render () {
      
      const {
        heading,
        title,
        subtile,
        author,
        date,
      } = this.props.welcome

      return (
        <div style = {styleHeader}>
        <h1>{heading} </h1>
        <h2>{title} </h2>
        <h3>{subtile} </h3>
        <h3>{author} </h3>
        <p>{date} </p>
        </div>
      )
}
}

class Body extends Component {
  constructor(props) {
    super (props)
    this.state = {
      background : "#fff",
      color: "#111"
    }
  }
  

  render () {
    const {
      skills,
      image,
    } = this.props.user

    const list = skills.map((skill) => <li key = {skill} >{skill}</li>)

    const greet = () => alert("Hi guys ^^")
    const showTime = () => {
      let day = new Date()
      let ngay = day.getDate()
      let thu = day.getDay()
      let thang = day.getMonth()
      let nam = day.getFullYear()
      let hour = day.getHours()
      let mins = day.getMinutes()
      let time = `Thu ${thu + 1}: ${ngay}/${thang+1}/${nam} : ${hour}:${mins}`
      return alert(time)
    }

    const changeBg = () => {
      let bg = this.state.background === "#fff" ? "#000" : "#fff"
      let cl = bg === "#fff" ? "#000" : "#fff"
      this.setState({background: `${bg}`})
      this.setState({color: `${cl}`})
    }
      document.body.style.backgroundColor = `${this.state.background}`
      document.body.style.color = `${this.state.color}`
    let styleButton = {
      backgroundColor: "#61dbfb",
      padding: "8px 8px",
      margin: "8px 8px"
    }
    return (
      <div >
      <h3>Get started react.js</h3>
      <ul>{list}</ul>
      <img src = {image} alt = "hinh anh" />
      <h2>Asabeneh Yetayeh</h2>
      <button style = {styleButton} onClick = {greet}>Greet People</button>
      <button style = {styleButton} onClick={showTime}>Show Time</button>
      <button style = {styleButton} onClick={changeBg}>Change Background</button>
      </div>
    )
  }
}

class Footer extends Component {
  render () {
    return (
      
      <div style = {styleFooter}>
      <p>CopyRight 2020</p>
      </div>
    )
  }
}

let styleHeader = {
  backgroundColor: "#61dbfb"
}

let styleFooter = {
  backgroundColor: "#61dbfb"
}


const App = () => {
  let welcome = {
    heading: "Welcome to 30 Days of React",
    title: "Getting Started React",
    subtile: "JavaScript Library",
    author: "Asabeneh Yatayeh",
    date: "Jun 22, 2022"
  }

  let user = {
    skills: ["HTMl", "CSS", "JavaScript"],
    image: `${asanabeh}`
  }

  return (
    <>
    <Header welcome = {welcome}  />
    <Body user = {user} />
    <Footer  />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

*/

// 2.  After long time of lock down, you may think of travelling and you do not know where to go. 
// You may be interested to develop a random country selector that selects your holiday destination.

import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import { countriesData } from './data/countries'


const Header = () => {
  const style_header = {
    backgroundColor:"#61dbfb",
    padding: "20px 80px",
    fontWeight: 'lighter',
    marginBottom: "16px"
  }

  return (
  <div style = {style_header}>
    <h1 style = {{fontSize: '44px'}}>30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <h3>Asabeneh Yetayeh</h3>
    <h4>Jun 23, 2022</h4>
    <p>Select a country for your next holiday</p>
  </div>
  )
}


const Footer = () => (
  <div style = {{backgroundColor: "#61dbfb",
                  marginTop : "12px",
                  textAlign: "center"}}>
    <p>CopyRight 2020</p>
  </div>
)


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: countriesData[0]
    }
  }
  
  

  render () {


    

      const randomCountry = () => {
      let rand = Math.floor(Math.random()*countriesData.length)
      this.setState({data: countriesData[rand]})
    }

    
      const {
        name,
        capital,
        languages,
        population,
        flag,
        currency
      } = this.state.data;
      let formatLang = languages.length > 1 ? "Languages" : "Language"
      let lang = languages.join(', ')
      const style_box = {
        border: "solid #ccc 1px",
        // alignSelf: "center",
        width: "600px",
        height: "600px",
        margin: "auto",
        paddingLeft: "12px"
        
      }

    return (
      <div style = {{
        // display: "flex",
        // alignContent: "space-around",
        // flexDirection: "column"
      }}>
        <div className='box' style ={style_box}>
        {/* <img src = {flag} alt = "hinh anh" /> */}
        <h2 style = {{textAlign: "center"}}>{name} </h2>
        <h3>Capital: {capital}</h3>
        <h3>{formatLang}: {lang} </h3>
        <h3>Population: {population}</h3>
        <h3>Currency: {currency} </h3>

        </div>
        <div>
        <button onClick = {randomCountry} style = {{
          backgroundColor: "#61dbfb",
          border: 'none',
          borderRadius: "8px",
          padding: "12px 12px",
          width: "200px",
          marginLeft: "45%",
          marginRight: "45%",
          marginTop: "16px"
          
        }} >Select Country</button>
        </div>
        

      </div>
    )
  }
}

const App = () => (
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)