import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  incrementValue = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button onClick={this.incrementValue} className="btn btn-secondary">
          Increase
        </button>
      </React.Fragment>
    );
  }
  getBadge() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
