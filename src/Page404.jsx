import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>このページは存在しません</h1>
      <Link to="/">TOPへ戻る</Link>
    </div>
  );
};
