import { Outlet } from "@tanstack/react-router";
import AppBar from "../components/AppBar/AppBar";

function Root() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}
export default Root;
