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
  // your code here
  render(){
    return (
      <div className="oldercoaster">
      <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <li>Agnes</li>
          <li>Muriel</li>
        </ul>
      </div>
    )
  }
}

export class InFrontOfYou extends React.Component {
  // your code here
  render(){
    return(
      <div>
        <p>You shouldn't look too far.</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
}

export class ButcherShop extends React.Component {
  // your code here
  render(){
    return(
      <div class="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
      <ul>
        <li>Tenderloin</li>
        <li>Short ribs</li>
        <li>Beef shin</li>
        <li>Ribeye</li>
  </ul>
</div>
    )
  }
}


ReactDOM.render(
  <div id="app">
        <OlderCoaster />
        <InFrontOfYou />
        <ButcherShop />
  </div>,
  document.getElementById('root')
)
