import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
 componentDidUpdate(prevProps, PrevState){
   console.log(prevProps, PrevState);
 }
 componentWillUnmount(){
  console.log('counter-Unmount');
 }

  render() {
    console.log('counter-Rendered');
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/*this.state.tags.length === 0 && "Please create new tags"}
        {this.renderTags()*/}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? <h1>Zero</h1> : value;
  }
}

export default Counter;
