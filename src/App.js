import { UserProvider } from "./provider/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router></Router>
      </UserProvider>
    </RecoilRoot>
  );
}
