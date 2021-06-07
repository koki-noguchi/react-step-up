import { useHistory } from "react-router-dom";

export const Page1A = () => {
  const history = useHistory();
  const clickBackButton = () => history.goBack();
  return (
    <div>
      <p>Page1Aです</p>
      <button onClick={clickBackButton}>戻る</button>
    </div>
  );
};
