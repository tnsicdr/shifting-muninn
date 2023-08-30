import { Outlet } from "@tanstack/react-router";
import AppBar from "../components/AppBar/AppBar";
import classes from "./root.module.css";

function Root() {
  return (
    <>
      <AppBar />
      <div className={classes.contentContainer}>
        <Outlet />
      </div>
    </>
  );
}
export default Root;
