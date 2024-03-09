import { useRouteError } from "react-router-dom";
import "./error.scss";

export default function ErrorPage() {
  const error = useRouteError();
  function setDisplay() {
    document.getElementById("initial-loader").style.display = "none";
  }

  const loaderSvg = document.querySelector("#initial-loader-svg");
  loaderSvg.style.width = "7.5rem";
  const loader = document.getElementById("initial-loader");
  loader.style.animationPlayState = "running";
  setDisplay();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred:</p>
      <p>
        <i>{`${error.status} : ` + `${error.statusText || error.message}`}</i>
      </p>
    </div>
  );
}
