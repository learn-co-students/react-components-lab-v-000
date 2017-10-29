import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render(){
    const description = React.createElement("p", {},
      "Two grannies having the time of their life!");
    const listTitle = React.createElement("p", {},
      "Passengers:");
    const passengerList = React.createElement("ul", {}, [
      React.createElement("li",{}, "Agnes"),
      React.createElement("li",{}, "Muriel")
    ]);

    return React.createElement("div", {className: "oldercoaster"}, [
      description,
      listTitle,
      passengerList
    ]);
  }
};

export class InFrontOfYou extends React.Component {
  render(){
    return React.createElement("div", {}, [
        React.createElement("p", {}, "You shouldn't look too far."),
        React.createElement("p", {}, "Sometimes, the solution is right in front of you.")
      ]);
  }
};

export class ButcherShop extends React.Component {
  render(){
    const productList = React.createElement("ul", {},
      BUTCHER_PRODUCTS.map((product) => {
        return React.createElement("li", {}, product);
      })
    );

    return React.createElement("div", {className: "butcher-shop"}, [
      React.createElement("p", {}, "Hello! We have the following products for sale today:"),
      productList
    ]);
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
