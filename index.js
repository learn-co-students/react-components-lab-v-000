const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const coasterP1 = React.createElement('p', {}, 'Two grannies having the time of their life!')
const coasterP2 = React.createElement('p', {}, 'Passengers:')
const coasterList = React.createElement('ul', {},
[
  React.createElement('li', {}, "Agnes"),
  React.createElement('li', {}, "Muriel")
])

const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', {className: 'oldercoaster'}, [coasterP1, coasterP2, coasterList])
  }
})



const inFrontP1 = React.createElement('p', {}, "You shouldn't look too far.")
const inFrontStrong = React.createElement('strong', {}, 'right in front of you.')
const inFrontP2 = React.createElement('p', {}, ["Sometimes, the solution is ", inFrontStrong])

class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [inFrontP1, inFrontP2])
  }
}

const butchP1 = React.createElement('p', {}, "Hello! We have the following products for sale today:")
const butchList = React.createElement('ul',{},
  BUTCHER_PRODUCTS.map(function(product) {
    return React.createElement('li', {}, product)
  })
)

class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: 'butcher-shop'}, [butchP1, butchList])
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
