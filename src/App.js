import { BrowserRouter, Link } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  const arr = [...Array(100).keys()];
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to={{ pathname: "/page1", state: arr }}>Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
