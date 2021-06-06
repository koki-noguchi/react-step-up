import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1A } from "./Page1A";
import { Page1B } from "./Page1B";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route exact path={`${url}/page1a`}>
                <Page1A />
              </Route>
              <Route exact path={`${url}/page1b`}>
                <Page1B />
              </Route>
            </switch>
          )}
        ></Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
