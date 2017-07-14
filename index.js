

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', { className: 'oldercoaster' }, [
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Agnes'),
        React.createElement('li', {}, 'Muriel'),
      ]),
    ]);
  }
});


class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {},);
  }
};


class ButcherShop extends React.Component {
  render() {
    return React.createElement();
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