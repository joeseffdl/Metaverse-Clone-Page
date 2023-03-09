import { motion } from "framer-motion"
import { TypingText } from "@/components/CustomTexts"
import styles from "@/styles"
import { fadeIn, staggerContainer } from "../utils/motion"

const About = () => (
  // group select-none flex h-screen snap-start snap-always items-center justify-center bg-green-500 bg-opacity-10
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Zeph" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        <span className="font-extrabold text-white ">Zeph</span> is a full-stack
        developer with a passion for creating beautiful and functional web
        applications. He has a strong background in web development and design,
        and is always looking for new ways to improve his skills.
      </motion.p>
            <motion.img
                variants={fadeIn("up", "tween", 0.3, 1)}
                src="arrow-down.svg"
                alt="Arrow Down"
                className="mt-[28px] w-[18px] h-[28px] object-contain"
            />
    </motion.div>
    About
    {/* <div>
                <div className="overflow-hidden text-7xl font-medium">
                    <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal">
                        Animate
                    </div>
                </div>
                <div className="overflow-hidden text-7xl font-medium">
                    <div className="group-hover/wrap:translate-y-full group-hover:animate-reveal group-hover:animation-delay-300">
                        Anything
                    </div>
                </div>
            </div> */}
  </section>
)

export default About
