import "./header.css";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <ul>
      <li>
        <Link class="active" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
      <li>
        <Link href="/user">User</Link>
      </li>
      <li>
        <Link href="/product">Product</Link>
      </li>
    </ul>
  );
};

export default Header;
