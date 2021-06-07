import { useParams, useLocation } from "react-router-dom";

export const UrlParameters = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <p>UrlParametersです</p>
      <p>パラメーターは{id}です</p>
      {query.get("name") && <p>クエリパラメーターは{query.get("name")}です</p>}
    </div>
  );
};
