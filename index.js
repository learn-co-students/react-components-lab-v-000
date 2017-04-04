const p1 = React.createElement('p', {}, 'Two grannies having the time of their life!');
const p2 = React.createElement('p', {}, 'Passengers:');
const list = React.createElement('ul', {}, [
  React.createElement('li', {}, 'Agnes'),
  React.createElement('li', {}, 'Muriel')
]);
const OlderCoaster = React.createClass({
  render() {
    return React.createElement('div', { className: 'oldercoaster'}, [p1, p2, list]);
  }
});

ReactDOM.render(
  React.createElement('div', {},
    React.createElement(OlderCoaster)
  ),
  document.getElementById('main')
);
