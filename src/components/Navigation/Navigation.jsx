import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorite">Favorites</NavLink>
      </nav>
    </header>
  );
};
