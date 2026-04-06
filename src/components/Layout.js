// components/Layout.js
import FloatingButton from './FloatingButton';

const Layout = ({ children }) => {
  return (
    <>
      <main id="main-content">{children}</main>
      <FloatingButton />
    </>
  );
};

export default Layout;
