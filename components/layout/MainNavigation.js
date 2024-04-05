import classes from './MainNavigation.module.css';
import Link from 'next/link'
function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>TODO TASK</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home Page</Link>
          </li>
          <li>
            <Link href='/today'>Add New TASK</Link>
          </li>
          <li>
            <Link href='/completedTask'>Completed TASK</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
