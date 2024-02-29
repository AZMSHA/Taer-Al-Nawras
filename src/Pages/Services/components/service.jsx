import "./Styles/service.scss";
import { useParams } from "react-router-dom";

export default function Service() {
  const bund = useParams();
  return <div>{bund}</div>;
}
