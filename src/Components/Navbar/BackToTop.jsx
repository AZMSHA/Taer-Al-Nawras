import Button from "../Button/button";
import "./BackToTop.scss";

export default function BackToTop({ children, Class, ...rest }) {
  return (
    <>
      <Button
        aria-label={"back to top"}
        id={"backToTopBtn"}
        {...rest}
        Class={"btn-sec-circle" + "  " + (Class ? Class : "")}
        title={"Go back to top"}
      >
        {children}
      </Button>
    </>
  );
}
