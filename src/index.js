import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const productsListNodes = BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))

const paragraphOne = React.createElement('p', {}, 'Two grannies having the time of their life!')
const paragraphTwo = React.createElement('p', {}, 'Passengers:')
const agnes = React.createElement('li', {}, 'Agnes')
const muriel = React.createElement('li', {}, 'Muriel')
const list = React.createElement('ul', {}, [agnes, muriel])

const paragraphThree = React.createElement('p', {}, "You shouldn't look too far.")
const paragraphFour = React.createElement('p', {}, "Sometimes, the solution is right in front of you.")

const paragraphFive = React.createElement('p', {}, 'Hello! We have the following products for sale today:')
const butcherList = React.createElement('ul', {}, productsListNodes)


// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', { className: 'oldercoaster'}, [paragraphOne, paragraphTwo, list])
  }
};
export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [paragraphThree, paragraphFour])
  }
};
export class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop'}, [paragraphFive, butcherList])
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
