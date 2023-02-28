import CustomNavigation from "../../components/CustomNavigation";
import Footer from "../../components/Footer";

function todo() {
  return <>Todo</>;
}

export default todo;

todo.getLayout = function PageLayout(page) {
  return (
    <>
      <CustomNavigation />
      {page}
      <Footer />
    </>
  );
};
