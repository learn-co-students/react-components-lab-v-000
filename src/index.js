import ReactDOM from 'react-dom';
import React from 'react';

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
    return (
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
    const products = BUTCHER_PRODUCTS.map(function(p, id){
      return <li>{p}</li>
    })
    return (
      <div className="butcher-shop">
      <p>Hello! We have the following products for sale today:</p>
        <ul>
          {products}
        </ul>  
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <OlderCoaster />
    <InFrontOfYou />
    <ButcherShop />
  </div>,
  document.getElementById('root')
)
