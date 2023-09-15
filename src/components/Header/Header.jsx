import { Link, List } from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </List>
      </nav>
    </header>
  );
};
