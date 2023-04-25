import { motion } from "framer-motion"
import { ExperienceCard, TitleText, TypingText } from "../components"
import { staggerContainer } from "../utils/motion"
import { experiences } from "../constants"

const Experiences = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
    >
      <TypingText title="| Experiences" textStyles="text-center" />
      <TitleText title="Experiences in the Industry" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`exp-${index}`}
            {...experience}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
)

export default Experiences
