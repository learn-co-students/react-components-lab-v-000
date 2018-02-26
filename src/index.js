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
  render() {
    const par1 = React.createElement('p', {}, 'Two grannies having the time of their life!');
    const par2 = React.createElement('p', {}, 'Passengers:');
    const list = React.createElement('ul', {}, [
      React.createElement('li', {}, 'Agnes'),
      React.createElement('li', {}, 'Muriel'),
    ]);
    return React.createElement('div', { className: 'oldercoaster' }, [par1, par2, list]);
  }
};
export class InFrontOfYou extends React.Component {
  render() {
    const par1 = React.createElement('p', {}, "You shouldn't look too far.");
    const par2 = React.createElement('p', {}, "Sometimes, the solution is right in front of you.");
    return React.createElement('div', {}, [par1, par2]);
  }
};

export class ButcherShop extends React.Component {
  render() {
    const par = React.createElement('p', {}, 'Hello! We have the following products for sale today:');
    const list = React.createElement('ul', {}, [
      BUTCHER_PRODUCTS.map(function(product) {
        return React.createElement('li', {} , product)
        })
    ]);
    return React.createElement('div', {className: 'butcher-shop'}, [par, list]);
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
