const p1 = React.createElement('p', {}, 'Two grannies having the time of their life!');
const p2 = React.createElement('p', {}, 'Passengers:');
const list = React.createElement('ul', {}, [
  React.createElement('li', {}, 'Agnes'),
  React.createElement('li', {}, 'Muriel')
]);
const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', { className: 'oldercoaster' }, [p1, p2, list]);
  }
});

const p3 = React.createElement('p', {}, 'You shouldn\'t look too far.');
const p4 = React.createElement('p', {}, 'Sometimes, the solution is right in front of you');
class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [p3, p4]);
  }
}

const p5 = React.createElement('p', {}, 'Hello! We have the following products for sale today:')
const BUTCHER_PRODUCTS = ['Tenderloin', 'Short ribs', 'Beef shin', 'Ribeye']
var list_elements = BUTCHER_PRODUCTS.map(function(product) {
  return React.createElement('li', { key: product }, product)
})
const butcher_list = React.createElement('ul', {}, list_elements);
class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', { className: 'butcher-shop' }, [p5, butcher_list]);
  }
}

ReactDOM.render(
  React.createElement('div', {},
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ),
  document.getElementById('main')
);
