import React from "react";

class Form extends React.Component {
  state = {
    age: "",
    add: "",
  };

  handleChangeAge = (Event) => {
    this.setState({
      age: Event.target.value,
    });
  };

  handleChangeAdd = (event) => {
    this.setState({
      add: event.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    if (!this.state.age && !this.state.add) {
      alert("you need enter in input to submit!");
      return;
    }
    this.props.addNewPerson({
      id: Math.floor(Math.random() * 101),
      age: this.state.age,
      add: this.state.add,
    });

    this.setState({
      age: "",
      add: "",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Age:</label>
          <br />
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleChangeAge(event);
            }}
          />
          <br />
          <label htmlFor="lname">Address:</label>
          <br />
          <input
            type="text"
            value={this.state.add}
            onChange={(event) => {
              this.handleChangeAdd(event);
            }}
          />
          <br />
          <br />
          <input
            type="submit"
            // value="submit"
            onClick={(event) => {
              this.handleClick(event);
            }}
          />
        </form>
      </>
    );
  }
}

export default Form;
