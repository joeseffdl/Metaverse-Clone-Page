import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
    About,
    Explore,
    Feedback,
    GetStarted,
    Hero,
    Insights,
    WhatsNew,
    World,
} from "../sections";

const Home = () => (
    <div
        // className="
        // lg:px-40
        // md:px-20
        // px-10 pt-20
        // bg-orange-200/75
        // "
        className="bg-black overflow-hidden"
    >
        <Navigation />
        <Hero />
        <About />
        <Explore />
        <GetStarted />
        <WhatsNew />
        <World />
        <Insights />
        <Feedback />
        {/* <Footer /> */}
    </div>
);

export default Home;
