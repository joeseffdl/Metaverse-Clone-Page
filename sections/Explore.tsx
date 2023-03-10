import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"
import { ExploreCard, TitleText, TypingText } from "../components"
import styles from "@/styles"
import { staggerContainer } from "../utils/motion"
import { exploreWorlds } from "../constants"

const Explore = () => {
    const [active, setActive] = useState("world-2")
    return (
        // relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12
        <section
            className={`${styles.paddings}`}
            id="explore"
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| The World" textStyles="text-center" />
                <TitleText title={<>Choose the world you want <br className="md:block hidden" /> to explore</>} textStyles="text-center" />
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive} />
                    ))}
                </div>
            </motion.div>
            Explore
            {/* <div className="absolute inset-auto h-96 w-96 scale-150 bg-orange-200 opacity-20 blur-3xl"></div>

            <div className="absolute inset-auto h-96 w-96 translate-x-full scale-150 bg-green-200 opacity-20 blur-3xl"></div>
            <div className="w-full">
                <div className="max-w-lg px-10">
                    <h1 className="text-5xl font-bold tracking-tight text-[#2f2963]">Must See Places</h1>
                    <p className="mt-5 opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum metus eu enim rhoncus posuere.</p>
                    <button className="to mt-5 min-w-[10rem] rounded-full bg-orange-500 bg-gradient-to-r from-rose-500 px-5 py-3 font-bold text-white shadow-xl shadow-rose-400">Explore</button>
                </div>

                <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll px-10">
                    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Cangu</h2>
                            <p className="text-sm text-white/50">Indonesia</p>
                        </div>
                        <Image src="https://source.unsplash.com/9bp48ITvd00" alt="image" width={384} height={384} className="rounded-xl object-cover" />
                    </div>

                    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">New York</h2>
                            <p className="text-sm text-white/50">United States</p>
                        </div>
                        <Image src="https://source.unsplash.com/4HG5hlhmZg8" alt="image" width={384} height={384} className="rounded-xl object-cover" />
                    </div>

                    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-blue-100 sm:w-[44%] md:w-[30%]">
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">London</h2>
                            <p className="text-sm text-white/50">United Kingdom</p>
                        </div>
                        <Image src="https://source.unsplash.com/oBmlsTW2pHY" alt="image" width={384} height={384} className="rounded-xl object-cover" />
                    </div>

                    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-green-100 sm:w-[44%] md:w-[30%]">
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Bali</h2>
                            <p className="text-sm text-white/50">Indonesia</p>
                        </div>
                        <Image src="https://source.unsplash.com/1kdIG_258bU" alt="image" width={384} height={384} className="rounded-xl object-cover" />
                    </div>

                    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-rose-100 sm:w-[44%] md:w-[30%]">
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Times Square</h2>
                            <p className="text-sm text-white/50">Singapore</p>
                        </div>
                        <Image src="https://source.unsplash.com/l8vKWxhVuts" alt="image" width={384} height={384} className="rounded-xl object-cover" />
                    </div>

                    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-yellow-100 sm:w-[44%] md:w-[30%]">
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Bangkok</h2>
                            <p className="text-sm text-white/50">Thailand</p>
                        </div>
                        <Image src="https://source.unsplash.com/0LGDmbnk0-U" alt="image" width={384} height={384} className="rounded-xl object-cover" />
                    </div>

                    <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-red-100 sm:w-[44%] md:w-[30%]">
                        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                            <h2 className="mt-4 text-xl font-bold text-white">Latina</h2>
                            <p className="text-sm text-white/50">South America</p>
                        </div>
                        <Image src="https://source.unsplash.com/tVqQSfXQ_SI" alt="image" width={384} height={384} class="h-full w-full rounded-xl object-cover" />
                    </div>
                </div>
            </div> */}
        </section>
    )
};

export default Explore;
