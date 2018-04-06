import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const products = [
  <li>{BUTCHER_PRODUCTS[0]}</li>,
  <li>{BUTCHER_PRODUCTS[1]}</li>,
  <li>{BUTCHER_PRODUCTS[2]}</li>,
  <li>{BUTCHER_PRODUCTS[3]}</li>
]

class Grannie extends React.Component {
  render() {
    return (
      <li>
        {this.props.content}
      </li>
    )
  }
}

export class OlderCoaster extends React.Component {
  render() {
    return (
      <div className="oldercoaster">

        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <Grannie content={"Agnes"}/>
          <Grannie content={"Muriel"}/>

          </ul>
        </div>
    )
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    return (
      <div>
        <p>You shouldn&apos;t look too far.</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
}

export class ButcherShop extends React.Component {
  render() {
    return (
      <div className="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
        <ul>
          { products }
        </ul>
      </div>
    )
  }
}


ReactDOM.render(
  [<OlderCoaster />, <InFrontOfYou />, <ButcherShop />],
  document.getElementById('root')
)
