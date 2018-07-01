var React = require('react')
var ReactDOM = require('react-dom')// Make sure to import React and ReactDOM

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const listed = BUTCHER_PRODUCTS.map((item, i) =>
<li key={i}>
{item}
</li>
);


// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
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
};
export class InFrontOfYou extends React.Component {
  render() {
    return (
      <div>
      <p>You shouldn&#39;t look too far.</p>
      <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
};
export class ButcherShop extends React.Component {

  render() {
    return (
      <div className="butcher-shop">
       <p>Hello! We have the following products for sale today:</p>
      <ul>
        {listed}
      </ul>
      </div>
    )
  }
};

ReactDOM.render(

  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
