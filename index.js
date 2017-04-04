const p1 = React.createElement(
  'p',
  {},
  'Two grannies having the time of their life!'
);

const p2 = React.createElement(
  'p',
  {},
  'Passengers:'
);

const list = React.createElement('ul', {}, [
  React.createElement('li', {}, 'Agnes'),
  React.createElement('li', {}, 'Muriel')
]);

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className : 'oldercoaster'}, [p1, p2, list]);
  }
});


class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, [
        'Sometimes, the solution is ',
        React.createElement('strong', {}, 'right in front of you.')
      ]),
    ]);
  }
}

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

items = BUTCHER_PRODUCTS.map(function (element) {
  return React.createElement('li', {}, element);
});

const p3 = React.createElement('p', {}, 'Hello! We have the following products for sale today:');
const list2 = React.createElement('ul', {}, items);

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className : 'buther-shop' }, [p3, list2]);
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
