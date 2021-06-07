import { useParams } from "react-router-dom";

export const UrlParameters = () => {
  const { id } = useParams();
  return (
    <div>
      <p>UrlParametersです</p>
      <p>パラメーターは{id}です</p>
    </div>
  );
};
