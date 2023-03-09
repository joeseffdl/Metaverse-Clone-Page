import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections"

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
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    {/* <Footer /> */}
  </div>
)

export default Home
