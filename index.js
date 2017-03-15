const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];



class OlderCoaster extends React.Component {
  render(){
    return React.createElement('div', {className: 'oldercoaster'},
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),

        React.createElement('ul', {},
          [
            React.createElement('li', {}, 'Agnes'),
            React.createElement('li', {}, 'Muriel')
          ]
        ) // ul 
    )// div
  } // render
} //class 


class InFrontOfYou extends React.Component{
  render() {
    return React.createElement('div',{},
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, 
        [
          "Sometimes, the solution is ",
           React.createElement('strong', {}, 'right in front of you.')
        ]) // 2nd p element with the strong text
      ) //div
  } // render
} // class


class ButcherShop extends React.Component{
  render(){
    return React.createElement('div', {className: 'butcher-shop'},
      React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
        React.createElement('ul', {},
          React.createElement('li', {}, BUTCHER_PRODUCTS[0]),
          React.createElement('li', {}, BUTCHER_PRODUCTS[1]),
          React.createElement('li', {}, BUTCHER_PRODUCTS[2]),
          React.createElement('li', {}, BUTCHER_PRODUCTS[3])
          ) //ul 
    ) //div
  } //render 
} // class 


// was supposed to use MAP function! here is the answer from the lab 
// class ButcherShop extends React.Component {
//   render() {
//     return React.createElement('div', { className: 'butcher-shop' }, [
//       React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
//       React.createElement('ul', {},
//         BUTCHER_PRODUCTS.map(product => React.createElement('li', {}, product))
//       )
//     ]);
//   }
// }



ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
