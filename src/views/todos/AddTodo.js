import React from "react";

class AddTodo extends React.Component {
  state = {
    name: "",
  };

  changName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  addATodo = () => {
    if (!this.state.name) {
      alert("you need enter name in input!");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 101),
      name: this.state.name,
    };

    this.props.addNewTodo(todo);
    this.setState({
      name: "",
    });
  };

  render() {
    let name = this.state.name;
    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="add todo now..."
          value={name}
          onChange={(event) => this.changName(event)}
        ></input>
        <button type="button" onClick={() => this.addATodo()}>
          add
        </button>
      </div>
    );
  }
}

export default AddTodo;
