import HeadComponent from "./Head";

function Layout({ children }) {
  return (
    <>
      <HeadComponent />
      <main>{children}</main>
    </>
  );
}

export default Layout;
