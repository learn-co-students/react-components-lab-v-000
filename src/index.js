// Make sure to import React and ReactDOM
import React from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
/*
const div = document.createElement('div');
ReactDOM.render(<OlderCoaster />, div);
});

it('should have the right DOM markup', () => {
expect(wrapper.html()).to.equal(`<div class="oldercoaster"><p>Two grannies having the time of their life!</p><p>Passengers:</p><ul><li>Agnes</li><li>Muriel</li></ul></div>`);
});*/

export class OlderCoaster extends React.Component {
  render() {
    return React.createElement('div', {className: "oldercoaster"},[
          React.createElement('p', {}, "Two grannies having the time of their life!"),
          React.createElement('p', {}, "Passengers:"),
          React.createElement('ul', {}, [
            React.createElement('li', {}, "Agnes"),
            React.createElement('li', {}, 'Muriel'),
          ])
    ])
  }
}
/*  it('should have the right DOM markup', () => {
    expect(wrapper.html()).to.equal(`<div><p>You shouldn&#x27;t look too far.</p><p>Sometimes, the solution is right in front of you.</p></div>`);
  });*/
export class InFrontOfYou extends React.Component {
  render(){
    return React.createElement('div', {}, [
      React.createElement('p', {}, `You shouldn't look too far.`),
      React.createElement('p', {}, `Sometimes, the solution is right in front of you.`)
    ])
  }
};

/*

  it('should have the right DOM markup', () => {
    expect(wrapper.html()).to.equal(`<div class="butcher-shop"><p>Hello! We have the following products for sale today:</p><ul><li>Tenderloin</li><li>Short ribs</li><li>Beef shin</li><li>Ribeye</li></ul></div>`);
  });

*/
export class ButcherShop extends React.Component {
  render(){
    return React.createElement('div', {className: "butcher-shop"}, [
      React.createElement(`p`, {}, `Hello! We have the following products for sale today:`),
      React.createElement(`ul`,{},
        BUTCHER_PRODUCTS.map(function(value){
          return React.createElement(`li`, {}, value)
        })
      )
    ])
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
