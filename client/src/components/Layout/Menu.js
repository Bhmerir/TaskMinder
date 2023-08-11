import classes from "./Menu.module.css";

import Button from "../UI/Button";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <br />
      <Button>New Task</Button>
      <br />
      <Button>Task's List</Button>
    </div>
  );
};

export default Menu;
