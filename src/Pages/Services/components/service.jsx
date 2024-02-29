import "./Styles/service.scss";
import { useParams } from "react-router-dom";

export default function Service() {
  const data = {};
  const ID = useParams().serviceID;

  return <div>{ID}</div>;
}
