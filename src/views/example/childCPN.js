import React from "react";

class ChildCPN extends React.Component {
  state = {
    showperson: false,
  };

  handleShowHide = () => {
    this.setState({
      showperson: !this.state.showperson,
    });
  };

  handleClickDel = (person) => {
    this.props.deletePerson(person);
  };

  render() {
    let { person } = this.props;
    // {
    //   console.log(person);
    // }
    let { showperson } = this.state;
    let check = showperson === true ? "person = true" : "person = false";
    console.log(">>> check conditional: ", check);

    return (
      <>
        {showperson === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="person list">
              {person.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.age} - {item.add} <></>
                    <span onClick={() => this.handleClickDel(item)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildCPN;
