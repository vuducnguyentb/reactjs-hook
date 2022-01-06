import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav.js";
import { useState } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import Blog from "./views/Blog";
import DetailBlog from "./views/DetailBlog";
import AddNew from "./views/AddNew";
import YoutobeSearch from "./views/YoutobeSearch";
import NotFound from "./views/NotFound";
import { CountDown, NewCountDown } from "./views/CountDown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  //state
  let [name, setName] = useState(""); // [a,b,c,..]
  let [address, setAddress] = useState("hlha");
  const [todos, setTodos] = useState([
    { id: 1, title: "DO my home work", type: "vn" },
    { id: 2, title: "Making video", type: "en" },
    { id: 3, title: "Writing blog", type: "vn" },
    { id: 4, title: "Walking with dogs", type: "en" },
  ]);

  const handleClick = (event) => {
    if (!address) {
      alert("empty input");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 10000 + 2),
      title: address,
      type: "vn",
    };
    setTodos([...todos, todo]);

    setAddress("");
    // setName(address);
    // console.log("clicked>>", name);
  };
  const deleteTodo = (todo) => {
    let newTodo = todos;
    newTodo = newTodo.filter((item) => item.id !== todo.id);
    setTodos(newTodo);
  };

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };

  const TimeUp = () => {
    alert("Time up!");
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />

          <img src={logo} className="App-logo" alt="logo" />
          {/* <h5>Hello {name}</h5> */}
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <CountDown TimeUp={TimeUp} />
              <span>--------------</span>
              <NewCountDown TimeUp={TimeUp} />
            </Route>
            <Route path="/todo-app">
              <Todo todos={todos} title={"All JObs"} deleteTodo={deleteTodo} />
              <Todo
                todos={todos.filter((item) => item.type === "vn")}
                title={"Job in VN"}
                deleteTodo={deleteTodo}
              />
              <input
                type="text"
                value={address}
                onChange={(event) => handleOnChangeInput(event)}
              />
              <button onClick={(event) => handleClick(event)}>Click</button>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/add-blog" exact>
              <AddNew />
            </Route>
            <Route path="/blog/:id" exact>
              <DetailBlog />
            </Route>
            <Route path="/secret" exact>
              <YoutobeSearch />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

          {/* <Todo todos={todos} title={"All JObs"} deleteTodo={deleteTodo} />
        <Todo
          todos={todos.filter((item) => item.type === "vn")}
          title={"Job in VN"}
          deleteTodo={deleteTodo}
        />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button onClick={(event) => handleClick(event)}>Click</button> */}
        </header>
      </div>
    </Router>
  );
}

export default App;
