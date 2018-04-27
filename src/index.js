import React from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const meats = [<li>{BUTCHER_PRODUCTS[0]}</li>, <li>{BUTCHER_PRODUCTS[1]}</li>, <li>{BUTCHER_PRODUCTS[2]}</li>, <li>{BUTCHER_PRODUCTS[3]}</li> ]

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return(
      <div class="oldercoaster">
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
  render(){
    return(
      <div class="butcher-shop">
        <p>Hello! We have the following products for sale today:</p>
        <ul>
          {meats}
        </ul>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <OlderCoaster/>
    <InFrontOfYou/>
    <ButcherShop/>
  </div>,
  document.getElementById('global')
)
