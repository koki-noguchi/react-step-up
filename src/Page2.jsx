import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <Link to="page2/100">UrlParameters</Link>
      <br></br>
      <Link to="page2/100?name=hoge">QueryParameters</Link>
    </div>
  );
};
