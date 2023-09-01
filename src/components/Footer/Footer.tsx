import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        <div className={classes.copyright}>
          <div>Copyright &copy; 2023</div>
          <div>
            Made using{" "}
            <a href="https://preactjs.com/" rel="noopener">
              Preact
            </a>{" "}
            and{" "}
            <a href="https://vitejs.dev/" rel="noopener">
              Vite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
