import { Link, useLocation } from "react-router-dom";

export const Page1 = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h1>Page1です</h1>
      <Link to="/page1/page1a">page1A</Link>
      <br></br>
      <Link to="/page1/page1b">page1B</Link>
    </div>
  );
};
