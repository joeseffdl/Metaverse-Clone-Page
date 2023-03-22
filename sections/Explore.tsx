import { useState } from "react";
import { motion } from "framer-motion";
import { ExploreCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import { exploreProjects } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`sm:p-16 xs:p-8 px-6 py-12`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <TypingText title="| Projects |" textStyles="text-center" />
        <TitleText
          title={
            <>
              Browse through my personal <br className="md:block hidden" /> 
              and collaborative projects
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreProjects.map((project, index) => (
            <ExploreCard
              key={project.id}
              {...project}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
