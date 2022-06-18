// Day 04:13/06/2022 

// # Exercises: Components

// ## Exercises: Level 1

// 1. What is the difference between a regular function and an arrow function?
// 2. What is a React Component?
// 3. How do you make a React functional component?
// 4. What is the difference between a pure JavaScript function and a functional component?
// 5. How small is a React component?
// 6. Can we make a button or input field component?
// 7. Make a reusable Button component.
// 8. Make a reusable InputField component.
// 9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).

// ## Exercises: Level 2

// 1. Create functional components and display the following images

// 2. Use functional component to create the following design


// ## Exercises: Level 3

// 1.  Use the given hexadecimal color generator in the example to create these random colors


// 2. Use functional component to design the following user card.


import React from 'react'
import ReactDOM from 'react-dom/client'
import js from './images/js_logo.png'
import html from './images/html_logo.png'
import css from './images/css_logo.png'
import reactLogo from './images/react_logo.png'
import userImg from './images/asabeneh.jpg'

let srcImgs = [js,css,reactLogo,html];

let styleImage = {
    backgroundColor: 'pink',
    maxWidth: '600px',
    maxHeight: '600px',
    marginBottom: '50px',
}

let li = (srcImg) => (
    <li key = {srcImg} style = {styleImage}>
        <img src = {srcImg} alt = 'ảnh'/>
    </li>
)

const logo = srcImgs.map((srcImg) => {
    return li(srcImg)
})

// style 
let styleLogo = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    // alignItems: 'center',
    flexWrap: 'wrap-reverse',
    flexDirection: 'row '
}

const Logo = () => (
    <ul style = {styleLogo}>
        {logo}
    </ul>
)

let styleH1 = {
    
    textAlign: 'center',
    fontSize: '40px',
    paddingTop: '12px'

}

// subscribe

let styleH2 = {
    
    textAlign: 'center',
}

let HeadingForm = <h1 style = {styleH1}>SUBSCRIBE</h1>
let textSub = 'Sign up with wour email address to receive news and updates.'
let SubHead = <h2 style = {styleH2}>{textSub}</h2>

let styleForm = {
    display: 'flex',
    justifyContent: 'space-around'
}

let styleInput = {
    borderRadius: '5px',
    border: 'solid 1px #ccc',
    height: '24px',
    padding: '4px 12px',
    width: '250px'
}

let styleSubmit = {
    borderRadius: '8px',
    backgroundColor: '#CD5C5C',
    
    maxWidth: '600px',
    flex: '1',
    height: '35px',
    margin: '12px'

}

let Input = () => (
    <div >
      <form >
        <div style = {styleForm}>
        <input style = {styleInput} type = 'text' placeholder='First name' name = 'fName'/>
        <input style = {styleInput} type = 'text' placeholder='Last name' name = 'lName'/>
        <input style = {styleInput} type = 'text' placeholder='Email' name = 'email'/>
        </div>
        <div style = {{display: 'flex', justifyContent: 'center'}}>
        <input  style = {styleSubmit} type = 'submit' placeholder='Subscribe' name = 'subscribe'/>
        </div>
      </form>
    </div>
)

let styleSubscribe = {
    backgroundColor: '#87CEFA'
}

const Subscribe = () => (
    <div className='subscribe' style = {styleSubscribe}>
        {HeadingForm}
        {SubHead}
        <Input/>
        {/* <Button/> */}
    </div>
)

// hexadecimal color
const alphab = '0123456789ABCDEF'
let getColorRandom = (alp) => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let index = Math.random()*(alp.length)
        index = Math.floor(index)
        color += alp[index]
    }
    return color;
}

let LiColors = []
for (let i = 0; i < 12; i++) {
    let color = getColorRandom(alphab);
    let jsxColor = <li key = {color} style = {{
        backgroundColor: `${color}`,
        textAlign: 'center',
        padding: '12px 0',
        borderRadius: '5px',
        height: '24px',
        width: '400px',
        margin: '12px 12px'
    }}>
        {color}</li>
    LiColors.push(jsxColor)
}



let HexaColor = () => (
    <div >
        <div>
            <h1 style = {styleH1} >Hexa Color Random</h1>
        </div>
        <div>
        <ul className='hexaColor' style = {{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
            
        }}>
            {LiColors}
        </ul>
        </div>
    </div>
)

let styleH4 = {
    fontStyle: 'italic',
    fontWeight: 'lighter',
    
}

let name = <h2  >ASABENEH YETAYEH</h2>
let subInform = <h4 style = {styleH4}>Senior Developer, Findland</h4>
let skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask',
            'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Docker', 
            'Heruko', 'Git']
let time = <h4 style = {styleH4}>Joined on Aug 30, 2020</h4>
let listSkills = skills.map((skill) => <li key = {skill} style = {{
    backgroundColor: '#87CEFA',
    padding: '8px 8px',
    
}} >{skill}</li>)
let userImgage = <img style = {{borderRadius: '50%'}} src = {userImg} alt = 'Asabeneh yetaeh'/>

let UserCard = () => (
    <div style = {{paddingLeft: '12px'}}>
        <div >
            <h1 style = {styleH1}>User Card</h1>
        </div>
        <div >
            {userImgage}
        </div>
        <div style = {{display: 'flex'}}>
            {name}
            <i style = {{alignSelf: 'center', paddingLeft: '4px'}} className="fa-solid fa-circle-check"></i>
        </div>
        {subInform}
        <div>
            <h2 style = {{}} >SKILLS</h2>
            <ul className='listSkills' style = {{
                display: 'flex',
                justifyContent: 'space-around',
                listStyle: 'none'
            }}>
                {listSkills}
            </ul>
        </div>
        <div style = {{display: 'flex'}}>
            <i style = {{alignSelf: 'center', paddingRight: '4px'}} className="fa-solid fa-clock"></i>
            {time}
        </div>
    </div>
)

const App = () => (
    <div className='app'>
        <div className='logo'>
            <h1 style = {styleH1} >Front End logo</h1>
            <Logo/>
        </div>
        <Subscribe/>
        <HexaColor/>
        <UserCard/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)