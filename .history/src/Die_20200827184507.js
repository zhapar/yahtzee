import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const numberWords = ["one", "two", "three", "four", "five", "six"];
    return (
      <i
        className={"Die"}
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
