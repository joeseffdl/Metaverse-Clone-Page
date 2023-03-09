
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion"
import Image from "next/image";


const Hero = () => (
    <section
        // className="h-screen bg-black flex items-center"
        className={`${styles.yPaddings} sm:pl-16 pl-6`}
    >
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1
                    variants={textVariant(1.1)}
                    className={styles.heroHeading}
                >
                    Zephyverse
                </motion.h1>
                <motion.div
                    variants={textVariant(1.2)}
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className={styles.heroHeading}>Ma</h1>
                    <div className={styles.heroDText} />
                    <h1 className={styles.heroHeading}>Ness</h1>
                </motion.div>
            </div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="relative w-full md:-mt-[20px] -mt-[12px]"
            >
                <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
                    <img
                        src="/cover.png"
                        alt="Cover"
                        className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
                    />
                    <a href="#explore">
                        <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                            <img
                                src="/stamp.png"
                                alt="Stamp"
                                className="w-[100px] sm:w-[155px] h-[100px] sm:h-[155px] object-contain"
                            />
                        </div>
                    </a>
            </motion.div>
        </motion.div>
        {/* <div className="w-full text-center animate-torch select-none whitespace-nowrap bg-gradient-to-r from-black via-white to-black 
                                    bg-[length:175px_50px] bg-clip-text bg-no-repeat text-4xl font-bold text-transparent
                                    sm:bg-[length:225px_75px] sm:text-6xl
                                    lg:bg-[length:250px_100px] lg:text-8xl">
                <h1 className="hover:animate-hoverTorch hover:bg-gradient-to-r 
                                    bg-[length:175px_50px] bg-clip-text bg-no-repeat text-4xl font-bold 
                                    sm:bg-[length:225px_75px] sm:text-6xl
                                    lg:bg-[length:250px_100px] lg:text-8xl"
                >
                    JOSEPH M DE LEON
                </h1>
            </div> */}
        {/* <div className="text-center p-10">
                        <h2 className="
                            md:text-6xl
                            text-4xl py-2 text-teal-400 font-semibold">
                            Joseph De Leon
                        </h2>
                        <h3 className="
                            md:text-3xl
                            text-2xl text-slate-900 py-2 font-semibold">
                            <Typewriter
                                options={{
                                    strings: ['Computer Engineer','Software Developer','Mobile Developer', 'Game Developer', 'Full Stack Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h3>
                        <p className="
                            md:text-xl
                            text-md max-w-lg mx-auto py-2 leading-8 text-slate-800">
                            Polytechnic University of the Philippines 
                        </p>
                    </div>
                    
                    <div className="
                        md:h-96 md:w-96
                        relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 m-15 mx-auto overflow-hidden">
                        <Image src={zephy} layout="fill" alt="Image of Joseph De Leon" />
                    </div> */}
    </section>
)

export default Hero;
