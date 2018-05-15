import React from 'react';
import ReactDOM from 'react-dom';

const ROTTEN_MEAT_PRODUCTS = ["Old Fish", "Sweeney Todd", "Tomatoes?"]

export class OlderCoaster extends React.Component {
  render() {
    return (
      <div class="oldercoaster">
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
  render() {
    return (
      <div>
        <p>{"You shouldn't look too far."}</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
}

const BUTCHER_PRODUCTS = ["Tenderloin", "Short ribs", "Beef shin", "Ribeye"]

const items = BUTCHER_PRODUCTS.map(function(item) {
  return (
    <li>{item}</li>
  )
});

export class ButcherShop extends React.Component {
  render() {
    return (
      <div class="butcher-shop">
        <p>Hello! We have the following products for sale today:</p>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
