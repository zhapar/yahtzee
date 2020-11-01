import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords = ["one", "two", "three", "four", "five", "six"]
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const classes = `Die fas fa-dice-${this.props.numberWords[this.props.val - 1]}`
    return (
      <i
        className={classes}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      >
        {this.props.val}
      </i>
    );
  }
}

export default Die;
