import Image from "next/image"
import { motion } from "framer-motion"
import { StartSteps, TitleText, TypingText } from "../components"
import styles from "@/styles"
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion"
import { startingFeatures } from "../constants"

const GetStarted = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: 'false', amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                variants={planetVariants('left')}
                className={`flex-1 ${styles.flexCenter}`}
            >
                <img
                    src="get-started.png"
                    alt="Get Started"
                    className="w-[90%] h-[90%] object-contain"
                />
            </motion.div>
            <motion.div
                variants={fadeIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] flex justify-center flex-col"
            >
                <TypingText
                    title="| How Zeph Works" />
                <TitleText title={<>Get started with just a few clicks</>} />
                <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
                    {startingFeatures.map((feature, index) => (
                        <StartSteps
                            key={feature}
                            number={index + 1}
                            text={feature}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
        {/* <div>
            <h3 className="text-3xl pt-20 py-2">Main Tech Stack</h3>
            <p className="text-md py-2 leading-8 text-gray-800">For building the frontend part of my application, I mainly use <a href="https://reactjs.org/"><span className="text-teal-600 font-semibold">React JS</span></a> which is JavaScript library for building user interfaces. While expanding its capabilities alongside with <a href="https://nextjs.org/"><span className="text-teal-600 font-semibold">Next JS</span></a> to streamline the development process.</p>
            <p className="text-md py-2 leading-8 text-gray-800">I also use <a href="https://firebase.google.com/"><span className="text-teal-600 font-semibold">Firebase</span></a> for the backend of my application which I took advantage of its database and authentication services. Wherein I host and deploy my application in <a href="https://vercel.com/"><span className="text-teal-600 font-semibold">Vercel</span></a>.</p>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-10">
            {[
                {
                    image: 'react',
                    name: 'React JS',
                    desc: 'An open-source JavaScript framework and library used for building interactive user interfaces and web applications.',
                    services: ['Frontend', 'UI/UX',]
                },
                {
                    image: 'next',
                    name: 'Next JS',
                    desc: `A full-stack framework that can be used to create a website's user interface on the front end and to manage databases and the rendering process on the back end.`,
                    services: ['Backend', 'Serverless functions',]
                },
                {
                    image: 'firebase',
                    name: 'Firebase',
                    desc: 'A service backed by Google which is an application development software that enables developer to develop iOS, Android and Web apps.',
                    services: ['Firestore database', 'Authentication',]
                },
            ].map((stack) => {
                return (
                    <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white" key={stack}>
                        <div className="grid place-content-center">
                            <Image src={`/${stack.image}.png`} width={100} height={100} alt={`${stack.name} image`} />
                        </div>
                        <h3 className="text-lg font-medium pt-8 pb-2">
                            {stack.name}
                        </h3>
                        <p className="py-2">
                            {stack.desc}
                        </p>
                        <h4 className="py-4 text-teal-600 font-semibold">
                            Implementation
                        </h4>
                        <ul>
                            {stack.services.map((service) => {
                                return (
                                    <li className="text-gray-800 py-1" key={service}>
                                        {service}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div> */}
    </section>
);

export default GetStarted;
