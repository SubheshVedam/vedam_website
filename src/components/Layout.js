// components/Layout.js
import FloatingButton from './FloatingButton';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <FloatingButton />
    </>
  );
};

export default Layout;