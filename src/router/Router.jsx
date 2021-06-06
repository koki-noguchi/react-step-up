import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1A } from "../Page1A";
import { Page1B } from "../Page1B";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route exact path={`${url}/page1a`}>
              <Page1A />
            </Route>
            <Route exact path={`${url}/page1b`}>
              <Page1B />
            </Route>
          </Switch>
        )}
      ></Route>
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
