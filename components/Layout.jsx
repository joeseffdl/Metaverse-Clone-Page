import Navigation from "./Navigation";
import Footer from "./Footer";
import HeadComponent from "./Head";

function Layout({ children }) {
  return (
    <>
      <HeadComponent />
      {/* <Navigation /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
