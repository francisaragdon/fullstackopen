// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p',null,'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null,a,' plus ', b,' is ', a + b
//     )
//   )

// }

//  const App = () => {
//    const name = 'Peter'
//    const age = 30

//    return (
//      <div>
//        <h1> Greetings</h1>
//        <Hello name = "Maya" age={10+30}/>
//        <Hello name = {name} age={age}/>
         
//      </div>

//    )
//  }

 const Hello = (prop) => {
   return (
     <div>
       <p>
         Hello {prop.name}, you are {prop.age} years old
       </p>
     </div>
   )
 }



const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(
  React.createElement(App,null),
   document.getElementById('root')
   )
  