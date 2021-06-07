import { Page2 } from "../Page2";
import { UrlParameters } from "../UrlParameters";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    Children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    Children: <UrlParameters />
  },
  {
    path: "/:id?name=hoge",
    exact: false,
    Children: <UrlParameters />
  }
];
