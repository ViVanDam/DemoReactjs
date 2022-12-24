import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./example/home";
import ListTodo from "./todos/listTodo";
import MyComponent from "./example/myComponent";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./nav/nav";
import ListUser from "./users/listUser";
import DetailsUser from "./users/detailsUser";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodo />
            </Route>
            <Route path="/mycpn">
              <MyComponent />
            </Route>
            <Route path="/users" exact>
              <ListUser />
            </Route>
            <Route path="/users/:id">
              <DetailsUser />
            </Route>
          </Switch>
        </BrowserRouter>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <RouterProvider router={router} /> */}
      </header>
    </div>
  );
}

export default App;
