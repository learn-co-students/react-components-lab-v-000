const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render() {
    const descPar = React.createElement('p', {}, 'Two grannies having the time of their life!');
    const passPar = React.createElement('p', {}, 'Passengers:');
    const passLis = [
      React.createElement('li', {}, 'Agnes'),
      React.createElement('li', {}, 'Muriel')
    ];
    const passengers = React.createElement('ul', {}, passLis);
    const coasterContents = [descPar, passPar, passengers];
    return React.createElement(
      'div',
      {className: 'oldercoaster'},
      coasterContents
    );
  }
});

class InFrontOfYou extends React.Component {
  render() {
    const par1 = React.createElement('p', {}, 'You shouldn\'t look too far.');
    // const strongText = React.createElement('strong', {}, )
    const par2 = React.createElement(
      'p',
      {},
      [
        "Sometimes, the solution is ",
        React.createElement('strong', {}, 'right in front of you.')
      ]
    );
    const contents = [par1, par2];
    return React.createElement(
      'div',
      {},
      contents
    );
  }
}

class ButcherShop extends React.Component {
  render() {
    const par = React.createElement('p', {}, "Hello! We have the following products for sale today:");
    const ul = React.createElement(
      'ul',
      {},
      BUTCHER_PRODUCTS.map(prod => React.createElement('li', {}, prod))
    );
    const contents = [par, ul];
    return React.createElement('div', {className: 'butcher-shop'}, contents);
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
