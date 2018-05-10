import React from 'react'
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

class P extends React.Component {
  render (){
    return (
      <p>{this.props.content}</p>
    )
  }
}

class Li extends React.Component {
  render (){
    return (
      <li>{this.props.content}</li>
    )
  }
}

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return (
      <div class="oldercoaster">
        <P content ={"Two grannies having the time of their life!"}/>
        <P content ={"Passengers:"}/>
        <ul>
          <Li content ={"Agnes"}/>
          <Li content ={"Muriel"}/>
        </ul>
      </div>
    )
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    return (
      <div>
        <P content={"You shouldn't look too far."}/>
        <P content={"Sometimes, the solution is right in front of you."}/>
      </div>
    )
  }
}

export class ButcherShop extends React.Component {
  render() {
    return (
      <div class="butcher-shop">
        <P content={"Hello! We have the following products for sale today:"}/>
        <ul>
          <Li content ={BUTCHER_PRODUCTS[0]}/>
          <Li content ={BUTCHER_PRODUCTS[1]}/>
          <Li content ={BUTCHER_PRODUCTS[2]}/>
          <Li content ={BUTCHER_PRODUCTS[3]}/>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    render your components here! Refer back to the previous README if you are lost
  </div>,
  document.getElementById('root')
)
