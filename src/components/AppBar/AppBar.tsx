import classes from "./AppBar.module.css";

function AppBar() {
  return (
    <div className={classes.appBarContainer}>
      <h1 className={classes.appBarLogo}>shifting muninn</h1>
    </div>
  );
}

export default AppBar;
