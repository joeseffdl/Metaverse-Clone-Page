import About from "../components/About";
import Explore from "../components/Explore";
import Feedback from "../components/Feedback";
import GetStarted from "../components/GetStarted";
import Hero from "../components/Hero";
import Insights from "../components/Insights";
import WhatsNew from "../components/WhatsNew";
import World from "../components/World";


function Home() {
    return (
        <main
            // className="
            // lg:px-40
            // md:px-20
            // px-10 pt-20
            // bg-orange-200/75
            // "
            className="snap-y snap-mandatory overflow-y-auto"
        >
            <Hero />
            <About />
            <Explore />
            <GetStarted />
            <WhatsNew />
            <World />
            <Insights />
            <Feedback />
        </main>
    );
}

export default Home;
