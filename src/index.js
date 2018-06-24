// import React from 'react' // We need to import react so we can make use of its .component class
// import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return (
      <div class="oldercoaster">
        { React.createElement('p', {}, "Two grannies having the time of their life!") }
        { React.createElement('p', {}, "Passengers:") }
        { React.createElement('ul', {}, [
            React.createElement('li', {}, "Agnes"),
            React.createElement('li', {}, "Muriel")
        ]) }
      </div>
    )
  }
  
}

export class InFrontOfYou extends React.Component {
  render() {
    return (
      <div>
        { React.createElement('p', {}, "You shouldn't look too far.") }
        { React.createElement('p', {}, "Sometimes, the solution is right in front of you.") }
      </div>
    )
  }
}

export class ButcherShop extends React.Component {
  render () {
    const butcherProducts = BUTCHER_PRODUCTS.map(function(product){
      return <li>{product}</li>;
    })
    return (
      <div class="butcher-shop">
        { React.createElement('p', {}, "Hello! We have the following products for sale today:") }
        <ul>{ butcherProducts }</ul>
    </div>
    )
  }
}


export class App extends React.Component {
  render() {
    return (
      <div id="app">
        <OlderCoaster />
        <InFrontOfYou />
        <ButcherShop />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
