import { Page1 } from "../Page1";
import { Page1A } from "../Page1A";
import { Page1B } from "../Page1B";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    Children: <Page1 />
  },
  {
    path: "/page1a",
    exact: true,
    Children: <Page1A />
  },
  {
    path: "/page1b",
    exact: true,
    Children: <Page1B />
  }
];
