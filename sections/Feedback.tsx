import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const Feedback = () => (
  <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col justify-center lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 0.25)}
        className="flex-[0.5] lg:max-w-1/3 flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
            Joseph De Leon
          </h4>
          <p className="mt-[8px] sm:text-[16px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            BS Computer Engineering | Polytechnic University of the Philippines
          </p>
        </div>
        <div className="my-4 h-[2px] bg-white opacity-10" />
        <p className="mt-[12px] font-normal sm:text-[22px] text-[16px] sm:leading-[45px] leading-[39px] text-white">
          &quot;Thought is the enemy of flow&quot;{" "}
          <span className=" sm:text-[18px] text-[12px] text-white">
            - Vinnie Colaiuta
          </span>
        </p>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
