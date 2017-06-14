const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const OlderCoaster = React.createClass({
  render(){
    return React.createElement('div', {className: "oldercoaster"}, [
    React.createElement('p', {}, 'This is the old way to do components'),
    React.createElement('p', {}, 'The one where we use const and createClass'),
    React.createElement('p', {}, 'I\'m a p element, heres a fucking list:'),
    React.createElement('ul', {}, [
      React.createElement('li', {}, 'Thing 1'),
      React.createElement('li', {}, 'Thing 2')
       ])
    ])
  }
})


class InFrontOfYou extends React.Component {
  render(){
    return React.createElement('div', {}, [
      React.createElement('p', {}, 'This is the new way to do components.'),
      React.createElement('p', {}, 'The one where we use classes (ie constructor functions) that extend React.Component.'),
      React.createElement('p', {}, ['This is a p element', 
      React.createElement('strong', {}, ' and this is a nested "strong" element, nested inside the p.')
      ])
        ])}
}

class ButcherShop extends React.Component {
  render(){
    return React.createElement('div', {className: "butcher-shop"}, [
      React.createElement('p', {}, 'We\'re using React.createElement here a bunch. Here\'s another list:'),
      React.createElement('ul', {}, [
        BUTCHER_PRODUCTS.map(function(product){
          return React.createElement('li', {}, product)
        })])])
  }
}

class Tweet extends React.Component {
  render() {
    return (
            <p>We are writing this tweet in JSX.</p>  
    );
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop),
    React.createElement(Tweet)
  ]), 
  document.getElementById('main')
);
