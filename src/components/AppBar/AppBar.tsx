import classes from "./AppBar.module.css";

function AppBar() {
  return (
    <div className={classes.appBarContainer}>
      <h1 className={classes.appBarLogo}>{import.meta.env.VITE_SITE_TITLE}</h1>
    </div>
  );
}

export default AppBar;
