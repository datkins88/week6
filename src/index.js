// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY
//ISSUES
//1. onClick class is not working when I click the button
//2.

var Deal = React.createClass({
  render: function(){
  return (
    <div className="col-sm-2">
      <div><a href="#" className="btn btn-success" onClick={this.dealOnClick} >Deal</a></div>
    </div>
  )
}})

var Card = React.createClass({
  render: function (){
    return (
      <div className="col-sm-2">
        <img className="img-responsive" src={"http://golearntocode.com/images/cards/"+ {this.props.Deck}[{this.props.cardNumber}]+".png"}/>
      </div>
      )
  }
})

var App = React.createClass({
  dealOnClick: function () {
    var Deck = getDeck().shuffle() // Cannot figure out how to create Deck when Deal Button is clicked
    this.setState({
      hand: Deck
    })
  },
  getInitialState: function(){
    return {
      hand: Deck[0,1,2,3,4]// will be the initial hand and reference the Deck array once we create it
      },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Card cardNumber="0"/>
          <Card cardNumber="1"/>
          <Card cardNumber="2"/>
          <Card cardNumber="3"/>
          <Card cardNumber="4"/>
          <Deal />
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
