import { Outlet } from "react-router-dom";

export default function Services(props) {
  return (
    <main {...props} id="services">
      <Outlet />
    </main>
  );
}
