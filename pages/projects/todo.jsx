import Footer from "../../components/Footer";

function todo() {
  return <>Todo</>;
}

export default todo;

todo.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
