import React from "react";
import "./listTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: 123, name: "learning english" },
      { id: 124, name: "learning reactjs " },
      { id: 125, name: "sleeping" },
      { id: 126, name: "eating somethings" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Congratulation! A new todo is success added !");
  };

  handleDeleteTodo = (todo) => {
    console.log(todo);
    let list = this.state.listTodos;
    let newList = list.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: newList,
    });
    toast.info("delete todo completed!");
  };

  hendleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmpty = Object.keys(editTodo).length === 0;
    if (isEmpty === false && editTodo.id === todo.id) {
      let list = [...listTodos];
      let indexEdit = list.findIndex((item) => item.id === todo.id);
      list[indexEdit].name = editTodo.name;
      this.setState({
        listTodos: list,
        editTodo: {},
      });

      toast.dark("edit successfully!");
      return;
    }

    this.setState({
      editTodo: todo,
    });

    //save
  };

  changeEditName = (event) => {
    let editTodocopy = { ...this.state.editTodo };
    editTodocopy.name = event.target.value;
    this.setState({
      editTodo: editTodocopy,
    });
  };

  render() {
    let list = this.state.listTodos;
    let editTodo = this.state.editTodo;
    let isEmpty = Object.keys(editTodo).length === 0;
    console.log(isEmpty);
    console.log(editTodo);
    return (
      <>
        <div className="container-todos">
          <p>hy! this is a list todo page</p>
          <hr></hr>
          <AddTodo addNewTodo={this.addNewTodo} />
          <hr></hr>
          <div className="list-todo">
            {list &&
              list.length > 0 &&
              list.map((item, index) => {
                return (
                  <div className="todo-item" key={item.id}>
                    <p>{index + 1}</p>
                    {isEmpty === true ? (
                      <span>{item.name}</span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            <input
                              type="text"
                              value={this.state.editTodo.name}
                              onChange={(event) => this.changeEditName(event)}
                            ></input>
                          </span>
                        ) : (
                          <span>{item.name}</span>
                        )}
                      </>
                    )}
                    <button onClick={() => this.hendleEditTodo(item)}>
                      {isEmpty === false && editTodo.id === item.id
                        ? "save"
                        : "edit"}
                    </button>
                    <button onClick={() => this.handleDeleteTodo(item)}>
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
