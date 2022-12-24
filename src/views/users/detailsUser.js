import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
class DetailsUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    let id;
    //lay ra id tu props chua params
    if (this.props.match && this.props.match.params) {
      id = this.props.match.params.id;
    }
    // lay data tu api backend
    let user = await axios.get(`https://reqres.in/api/users/${id}`);
    //set user cua state la user lay tu data api backend
    this.setState({
      user: user.data.data,
    });
  }

  backUsersPage = () => {
    this.props.history.push("/users");
  };

  render() {
    let user = this.state.user;
    let isEmpty = Object.keys(user).length === 0;
    return (
      <>
        <p>Hy this is details user page</p>
        <br></br>
        {isEmpty === false && (
          <>
            <div>
              <span>User Name : </span>
              <span>
                {user.first_name} {user.lát}
              </span>
            </div>
            <div>
              <span>User Email : </span>
              <span>{user.email}</span>
            </div>
            <div>User Avatar</div>
            <div>
              <img src={user.avatar}></img>
            </div>
            <div>
              <button onClick={() => this.backUsersPage()}>Back</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailsUser);
