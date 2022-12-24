import React from "react";
import ChildCPN from "./childCPN";
import Form from "./FormCPN";
class MyComponent extends React.Component {
  state = {
    person: [
      {
        id: 1,
        age: 20,
        add: "HCM",
      },
      {
        id: 2,
        age: 21,
        add: "HCM",
      },
      {
        id: 3,
        age: 22,
        add: "HN",
      },
    ],
  };

  addNewPerson = (person) => {
    // method 1
    // this.setState({
    //   person: [...this.state.person, person],
    // });

    // method 2
    let listPerson = this.state.person;
    listPerson.push(person);
    this.setState({
      person: listPerson,
    });
  };

  deletePerson = (person) => {
    let listPerson = this.state.person;
    let listPersons = listPerson.filter((item) => item.id !== person.id);

    // let listNew = [];
    // for (let i = 0; i < listPerson.length; i++) {
    //   if (listPerson[i].id !== person.id) {
    //     listNew.push(listPerson[i]);
    //   }
    // }

    this.setState({
      person: listPersons,
    });
  };

  render() {
    return (
      <>
        <Form addNewPerson={this.addNewPerson} />
        <ChildCPN person={this.state.person} deletePerson={this.deletePerson} />
      </>
    );
  }
}

export default MyComponent;
