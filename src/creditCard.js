import React, { Component } from "react";
import "./App.css";
import card from "./masterCard.png";

export default class creditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      date: "",
      name: ""
    };
  }
  numberCard = event => {
    const re = /[^0-9 ]/gi;
    if (!event.target.value.match(re) && event.target.value.length <= 19) {
      this.setState({ number: event.target.value.replace(/[ ]/g, "") });
    }
  };
  addSpace = number => {
    let arr = [];
    for (let i = 0; i < number.length; i += 4) {
      arr.push(number.slice(i, i + 4));
    }

    return arr.join(" ");
  };
  yearCard = e => {
    const re = /[^0-9/]/gi;
    if (
      !e.target.value.match(re) &&
      e.target.value.slice(0, 1) <= 1 &&
      e.target.value.slice(0, 2) <= 12
    ) {
      this.setState({ date: e.target.value.replace(/[/]/g, "") });
    }
  };
  backSlash = date => {
    let arr = [];
    for (let i = 0; i < date.length; i += 2) {
      arr.push(date.slice(i, i + 2));
    }
    return arr.join("/");
  };
  nameCard = event => {
    const re = /[^a-z\s]/gi;
    if (!event.target.value.match(re) && event.target.value.length <= 20)
      this.setState({ name: event.target.value.toUpperCase() });
  };

  render() {
    return (
      <div>
        <div className="arriere">
          <p className="title-credit">CREDIT CARD</p>
          <img className="puce" src={require("./puce.png")} />
          <div className="bloc">
            <div className="infos">
              <p className="num-card">
                {this.addSpace(this.state.number.padEnd(16, "*"))}
              </p>
              <div className="nums-bloc">
                <p className="num-bloc">{this.state.name}</p>
                <div className="valid">
                  <div>
                    <p className="valid-thru">valid</p>
                    <p className="valid-thru">thru</p>
                  </div>
                  <div>
                    <p className="month-year">MONTH/YEAR</p>
                    <p className="num-bloc">
                      {this.backSlash(this.state.date.padEnd(4, "*"))}
                    </p>
                  </div>
                </div>
              </div>
              <p className="card-holder">{this.state.nameCard}</p>
            </div>
            <img className="img-card" src={card} />
          </div>
        </div>
        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="Number"
                //maxLength={16}
                value={this.addSpace(this.state.number)}
                onChange={this.numberCard}
              />
            </div>
            <div>
              <input
                type="text"
                maxLength={5}
                placeholder="Date"
                value={this.backSlash(this.state.date)}
                onChange={this.yearCard}
                // onChange={(e)=>{this.yearCard(e); console.log('hi')}}
              />
            </div>
            <div>
              <input
                type="text"
                //maxLength={20}
                placeholder="Name"
                value={this.state.name}
                onChange={this.nameCard}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
