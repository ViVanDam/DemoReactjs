import React from "react";
import { withRouter } from "react-router-dom";
import coffeShop from "../../assets/images/quanCafetrongLonBia.jpg";
class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todos");
  //   }, 3000);
  // }

  render() {
    return (
      <>
        <p>Hello This is Home page</p>
        <p>My name is Adam.</p>
        <img className="coffee" src={coffeShop}></img>
      </>
    );
  }
}

export default withRouter(Home);
