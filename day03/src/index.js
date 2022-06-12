// Day 03: setting up 

// ## Exercises: Level 1

// 1. What is a module?
// 2. What is package?
// 3. What is the difference between a module and a package.
// 4. What is NPM?
// 5. What is Webpack?
// 6. How do you create a new React project?
// 7. What are the files and folders inside a project folder(package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?
// 8. What is your favorite code editor (I believe that it is Visual Studio Code)?
// 9. Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).
// 10. Try to make a different custom module in a different file and import it to index.js.

// ## Exercises: Level 2

// 1. Import and render the following images

// 2. Use h1, p, input and button HTML elements to create the following design using JSX


// ## Exercises: Level 3

// 1. Design the following user card.


// Level 1:

// 1. module is a single or multiple functions which can exported or imported when needed, can be included a project

// 2. package is a module or a collections of modules: React, ReactDOM ,...

// 4. npm is node package manager which allows create packages, uses packages and distribute js packages

// 5. webpackage là 1 phần mềm cho phép đóng gói các mã nguồn khi nó hoạt động

// 6. - npx create-react-app name-app
      // - create-react-app name-app
      // - npm start

// 7. - package.json : list of package which app uses
//    - package-lock.json : lock the version of the package
//    - gitignore : allows files and folders not to be pushed to github
//    - node_modules : store all the necessary node packages of react app
//    - public : index.html , favicon.ico, manifest.json, images, robots.txt

// 8. visual studio code ofcourse

// 9. done !

// Level 2:

// 1.
import React from 'react'
import ReactDOM from 'react-dom/client'

import image1 from './imgs/anime1.jpg'

let name = <h2>Bùi Thị Thanh Ngân</h2>
let birthday = <h3>Birthday: 22/05/2003</h3>
let country = <h3>Country: Việt Nam</h3>
let province = <h3>Province: Quảng Ngãi</h3>

// style:
let styleInform = {
  backgroundColor: '#61DBFB',
  color: 'coral',
  padding: '12px 12px'
}

let myInform = (
  <div className='Inform' style = {styleInform}>
    {name}
    {birthday}
    {country}
    {province}
  </div>
)

let id = 'thanhngan22'
let pass = 22052003

let user = (
  <div className='user' style = {styleInform}>
    <h4>ID: {id}</h4>
    <h4>Pass: {pass}</h4>
    <div className='image'>
    <img src = {image1} alt = 'ảnh anime' />
    </div>
  </div>
)

// style input
let styleForm = {
  backgroundColor: 'rgba(137,226,125,0.5)',
  fontFamily: 'arial',
  textAlign: 'center',
  lineHeight: '1.5',
  padding: '24px 24px',
}

let styleInput = {
  display: 'inline-block',
  width: '33.33333%',

}

let heading = 'SUBSCRIBE' ;
let text = 'Sign up with your email address to receive news and updates.';

let input1 = <input style = {{padding: '8px 8px ', borderRadius:'8px'}} id = 'input1' placeholder='First name' ></input>
let input2 = <input style = {{padding: '8px 8px ', borderRadius:'8px'}} id = 'input2' placeholder='Last name'></input>
let input3 = <input style = {{padding: '8px 8px ', borderRadius:'8px'}} id = 'input3' placeholder='Email'></input>

let btn = <button id = 'subscribe' 
style={
  {
      backgroundColor: 'coral',
      padding: '8px 80px',
      margin: '24px 24px'}} 
    >Subscribe</button>

let form = (
  <div className = 'form' style = {styleForm}>
    <h1 style = {{fontWeight: 'lighter'}}>{heading}</h1>
    <h2 style = {{fontWeight: 'lighter'}}>{text}</h2>
    <div >
      <div style = {styleInput}>{input1}</div>
      <div style = {styleInput}>{input2}</div>
      <div style = {styleInput}>{input3}</div>
  
    </div>
    <div >{btn}</div>
  </div>

)

let styleLi = {
  listStyle : 'none',
  backgroundColor: '#61DBFB',
  padding: '4px 4px',
  display: 'inline-block', 
  margin: '8px 8px',
  borderRadius: '4px'

}

let skills = ['Pascal', 'C', 'C++', 'HTML', 'CSS', 'JavaScript'];
let jsxSkills = skills.map((skill) => <li style = {styleLi}>{skill}</li>)

let show = (
  <div className='show' >
    {myInform}
    {user}
    {form}
    {jsxSkills}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(show)


