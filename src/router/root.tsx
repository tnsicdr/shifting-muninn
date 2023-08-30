import { Outlet } from "@tanstack/react-router";
import AppBar from "../components/AppBar/AppBar";
import classes from "./root.module.css";
import Footer from "../components/Footer/Footer";

function Root() {
  return (
    <div className={classes.layoutContainer}>
      <AppBar />
      <div className={classes.contentContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Root;
