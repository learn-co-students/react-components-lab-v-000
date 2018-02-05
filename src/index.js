import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const pMaker = (string) => React.createElement('p', {}, string)

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return (
      React.createElement('div', { className: 'oldercoaster' }, [
      pMaker('Two grannies having the time of their life!'),
      pMaker('Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel')
      ])
    ])
  )}
};
export class InFrontOfYou extends React.Component {
  render() {
    return (
      React.createElement('div', {}, [
        pMaker("You shouldn't look too far."),
        pMaker("Sometimes, the solution is right in front of you.")
      ])
    )}
};
export class ButcherShop extends React.Component {
  render() {
    return (
      React.createElement('div', { className: "butcher-shop" }, [
        pMaker('Hello! We have the following products for sale today:'),
        React.createElement('ul', {}, BUTCHER_PRODUCTS.map(bp => <li>{bp}</li>))
      ])
    )}
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
