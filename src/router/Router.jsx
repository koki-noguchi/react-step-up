import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { HeaderOnly } from "../components/layouts/HeaderOnly";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
