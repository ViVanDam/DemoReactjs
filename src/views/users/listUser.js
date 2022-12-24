import React from "react";
import axios from "axios";
import "./listUser.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };

  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=1").then((res) => {
    //   console.log(res.data.data);
    // });

    let res = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }

  showDetailsUser = (user) => {
    this.props.history.push(`/users/${user.id}`);
  };

  render() {
    let listUser = this.state.listUser;
    return (
      <>
        <div className="list-user">
          <div className="user-item">
            <span>No</span>
            <span>ID</span>
            <span>Full Name</span>
          </div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  className="user-item"
                  key={item.id}
                  onClick={() => this.showDetailsUser(item)}
                >
                  <span>{index + 1}</span>
                  <span>{item.id}</span>
                  <span>
                    {item.first_name} {item.last_name}
                  </span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default withRouter(ListUser);
