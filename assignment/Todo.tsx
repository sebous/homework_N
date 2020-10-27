import React from "react";

// props type should be defined and passed to component, to get proper TS typecheck here
// can be rewritten as functional component for better possiblities of code granularity (custom hooks) etc.
class Todo extends React.Component<any> {
  // can be replaced by React.memo to mimic this behaviour
  shouldComponentUpdate(prevProps: any) {
    // since passed prop todo is an object, this only compares references not actual properties of passed object
    // shallow comparsion should be used here
    if (this.props != prevProps) {
      return true;
    }
    return false;
  }

  // no router present, so this doesn't work, should be handled by router
  handleOnClick() {
    window.location.href = "/detail";
  }

  render() {
    return (
      <div>
        <div onClick={this.handleOnClick}>{this.props.todo.title}</div>
      </div>
    );
  }
}

export default Todo;
