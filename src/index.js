import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const greeting = React.createElement("p", {}, "Hello! We have the following products for sale today:")
const meat = BUTCHER_PRODUCTS.map(el => {
  return React.createElement("li", {}, el)
})
const products = React.createElement("ul", {}, meat)

const slogan = React.createElement('p', {}, "Two grannies having the time of their life!")
const listTitle = React.createElement('p', {}, "Passengers:")
const list = React.createElement('ul', {},
  [
    React.createElement('li', {}, "Agnes"),
    React.createElement('li', {}, "Muriel")
  ])

  const tooFar = React.createElement("p", {}, "You shouldn't look too far.")
  const inFront = React.createElement("p", {}, "Sometimes, the solution is right in front of you.")

export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: "oldercoaster"}, [slogan, listTitle, list])
  }
};

export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement("div", {}, [tooFar, inFront])
  }
};
export class ButcherShop extends React.Component {
  render() {
    return React.createElement("div", {className: "butcher-shop"}, [greeting, products])
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
