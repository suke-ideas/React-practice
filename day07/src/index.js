// day 07: 22/06/2022

import React, {Component} from 'react'
import ReactDOM  from 'react-dom/client'
import anImg from './images/225.jpg'


// import image from './images/asabeneh.jpg'

// const welcome = "Welcome to 30 Days of React"
// const title = "Getting Started React"
// const subtile = "JavaScript Library"
// const name = "Asabeneh Yetayeh"
// const date = "Jun 22, 2022"

// class Header extends Component {
//   constructor (props) {
//     super (props)
//   }
//   render () {
//     return (
//       <>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtile}</h3>
//       <p>{name}</p>
//       <img src = {image} alt ="Asanebeh"/>
//       <br></br>
//       <small>{date}</small>
//       </>
//     )
//   }
// }

// class Header extends Component {
//   constructor (props) {
//     super (props)
//   }

//   render () {
//     return (
//       <>
//       <h1>{this.props.data.welcome}</h1>
//       <h2>{this.props.data.title}</h2>
//       <h3>{this.props.data.subtile}</h3>
//       <p>{this.props.data.name}</p>
//       <br></br>
//       < img src = {this.props.data.image} alt = "asanebeh" />
//       <br></br>
//       <small>{this.props.data.date}</small>
//       </>
//     )
//   }
// }

// const App = () => {
//   const data = {
//     welcome,
//     title,
//     subtile,
//     name,
//     image,
//     date,
//   }
//   return (
//     <>
//     <Header data = {data} />
//     </>
//   )
// }

class Header extends Component {
  constructor (props) {
    super (props)
    
  }

  render () {
    const {
      name,
      birthday,
      address,
      university,
      major,
      hobby,
      image,
    } = this.props.user

    let styleList = {
      backgroundColor: '#fa25',
      padding: '8px 8px ',
      margin: '0 12px',
      
    }

    let listHobby = hobby.map((hobby) => <li style = {styleList} key = {hobby}>{hobby}</li>)

    return (
      <>
      <h1>{name} </h1>
      <h2>{birthday} </h2>
      <h2>{address} </h2>
      <h3>{university} </h3>
      <h3>{major} </h3>
      <ul style = {{listStyle: 'none', display: 'flex'}}>{listHobby}</ul>
      <img src = {image} alt ="hinh anh" />
      </>
    )
  }
}




const App = () => {
  const user = {
    name: "Bùi Thị Thanh Ngân",
    birthday: "22/05/2003",
    address: "Bình Châu, Bình Sơn, Quảng Ngãi",
    university: "HCMUS",
    major: "IT",
    hobby: ["listening to music", "sleeping", "coding", "chọc chó :)"],
    image: `${anImg}`
  }
  return (
    <>
    <Header user = {user}/>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
