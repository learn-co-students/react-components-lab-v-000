import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

var oldercoasterList = React.createElement('ul', {}, [
  React.createElement('li', {}, 'Agnes'),
  React.createElement('li', {}, 'Muriel')
]);

var meatList = React.createElement('ul', {}, [
  React.createElement('li', {}, 'Tenderloin'),
  React.createElement('li', {}, 'Short ribs'),
  React.createElement('li', {}, 'Beef shin'),
  React.createElement('li', {}, 'Ribeye')
]);

export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      oldercoasterList
    ]);
  }
};
export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, "Sometimes, the solution is right in front of you.")
    ]);
  }
};
export class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: 'butcher-shop'}, [
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
      meatList
    ]);
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
