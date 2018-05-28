// import React from 'react' // We need to import react so we can make use of its .component class
// import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
import React from 'react'
import ReactDOM from 'react-dom'
const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return React.createElement("div", {className: "oldercoaster"}, [
      React.createElement("p", {}, 'Two grannies having the time of their life!'),
      React.createElement("p", {}, 'Passengers:'),
      React.createElement("ul", {}, [
        React.createElement("li", {}, "Agnes"),
        React.createElement("li", {}, "Muriel")
      ])
    ])
  }
  // this function should return the JSX we want the DOM to render
  // render() {
  //   return (
  //     <div>Hello!</div>
  //   )
  // }
  //
}

export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("p", {}, "You shouldn't look too far."),
      React.createElement("p", {}, "Sometimes, the solution is right in front of you.")
    ])
  }
}

export class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop'},[
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
        React.createElement('ul', {},
          BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))
        )
    ])
  }
};


export class App extends React.Component {
  render() {
    return (
      <div id="app">

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
