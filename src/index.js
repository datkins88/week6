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

//KEY ISSUES I'm (STILL) HAVING
//1.Cannot get transferring of "cardNumber" props within img of "Card" to work -- which makes for large error from the outset
//2.Having very tough time understand the syntax for State in this example -- Buyflix is so much more complex that I can't draw parallels
//3. Not sure if Deck should be element defined beneath App and Deal.

var Deck = window.getDeck().shuffle()

var Deal = React.createClass({
  dealOnClick: function(hand) {
    this.setState({
      hand: Deck[0,1,2,3,4]
    })
  },
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
        <img className="img-responsive" alt="cards" src={"http://golearntocode.com/images/cards/"+ Deck[{this.props.cardNumber}]+ ".png"}/> //
      </div>
      )
  }
})

var App = React.createClass({
  dealOnClick: function(hand) {
    this.setState({
      hand: Deck[0,1,2,3,4]
    })
  },
  getInitialState: function(){
    return {
        hand: Deck["face_down","face_down","face_down","face_down","face_down"]
      }
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
          <Deal/>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
