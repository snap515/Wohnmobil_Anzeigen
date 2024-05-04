import { Outlet } from 'react-router-dom';
import { Navigation } from 'components';
import { Container } from 'styles/GlobalStyles';
export const Layout = () => {
  return (
    <Container>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
