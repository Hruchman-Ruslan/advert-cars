import { HeaderContainer, Item, Link, List } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <List>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/catalog">Catalog</Link>
          </Item>
          <Item>
            <Link to="/favorites">Favorites</Link>
          </Item>
        </List>
      </nav>
    </HeaderContainer>
  );
};
