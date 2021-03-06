import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const disabled = this.props.score;
    const classes = `RuleRow RuleRow-${diabled ? "disabled" : "active"}`;
    return (
      <tr
        className={classes}
        onClick={this.props.score ? null : this.props.doScore}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
