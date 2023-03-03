import Head from "next/head";
import Image from "next/image";
import zephy from "../public/zephy.jpg";
import Typewriter from "typewriter-effect";

function Home() {
    return (
        <>
            <Head>
                <title>Joseph De Leon</title>
                <meta name="description" content="Portfolio by Joseph De Leon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                // className="
                // scroll-smooth
                // lg:px-40
                // md:px-20
                // px-10 pt-20
                // bg-orange-200/75
                // "
                className="snap-y snap-mandatory overflow-y-auto scroll-smooth"
            >
                <section className="h-screen bg-black flex items-center">
                    <div className="w-full text-center animate-torch select-none whitespace-nowrap bg-gradient-to-r from-black via-white to-black 
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
                    </div>

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
                <section className="group select-none flex h-screen snap-start snap-always items-center justify-center bg-green-500 bg-opacity-10">
                    <div>
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
                    </div>
                </section>
                <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                    <div className="absolute inset-auto h-96 w-96 scale-150 bg-orange-200 opacity-20 blur-3xl"></div>

                    <div className="absolute inset-auto h-96 w-96 translate-x-full scale-150 bg-green-200 opacity-20 blur-3xl"></div>
                    <div className="w-full">
                        <div className="max-w-lg px-10">
                            <h1 className="text-5xl font-bold tracking-tight text-[#2f2963]">Must See Places</h1>
                            <p className="mt-5 opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum metus eu enim rhoncus posuere.</p>
                            <button className="to mt-5 min-w-[10rem] rounded-full bg-orange-500 bg-gradient-to-r from-rose-500 px-5 py-3 font-bold text-white shadow-xl shadow-rose-400">Explore</button>
                        </div>

                        <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
                            <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
                                <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                                    <h2 className="mt-4 text-xl font-bold text-white">Cangu</h2>
                                    <p className="text-sm text-white/50">Indonesia</p>
                                </div>
                                <img src="https://source.unsplash.com/9bp48ITvd00" alt="image" className="h-full w-full rounded-xl object-cover" />
                            </div>

                            <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
                                <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                                    <h2 className="mt-4 text-xl font-bold text-white">New York</h2>
                                    <p className="text-sm text-white/50">United States</p>
                                </div>
                                <img src="https://source.unsplash.com/4HG5hlhmZg8" className="h-full w-full rounded-xl object-cover" />
                            </div>

                            <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-blue-100 sm:w-[44%] md:w-[30%]">
                                <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                                    <h2 className="mt-4 text-xl font-bold text-white">London</h2>
                                    <p className="text-sm text-white/50">United Kingdom</p>
                                </div>
                                <img src="https://source.unsplash.com/oBmlsTW2pHY" className="h-full w-full rounded-xl object-cover" />
                            </div>

                            <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-green-100 sm:w-[44%] md:w-[30%]">
                                <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                                    <h2 className="mt-4 text-xl font-bold text-white">Bali</h2>
                                    <p className="text-sm text-white/50">Indonesia</p>
                                </div>
                                <img src="https://source.unsplash.com/1kdIG_258bU" className="h-full w-full rounded-xl object-cover" />
                            </div>

                            <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-rose-100 sm:w-[44%] md:w-[30%]">
                                <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                                    <h2 className="mt-4 text-xl font-bold text-white">Times Square</h2>
                                    <p className="text-sm text-white/50">Singapore</p>
                                </div>
                                <img src="https://source.unsplash.com/l8vKWxhVuts" className="h-full w-full rounded-xl object-cover" />
                            </div>

                            <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-yellow-100 sm:w-[44%] md:w-[30%]">
                                <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                                    <h2 className="mt-4 text-xl font-bold text-white">Bangkok</h2>
                                    <p className="text-sm text-white/50">Thailand</p>
                                </div>
                                <img src="https://source.unsplash.com/0LGDmbnk0-U" className="h-full w-full rounded-xl object-cover" />
                            </div>

                            <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-red-100 sm:w-[44%] md:w-[30%]">
                                <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                                    <h2 className="mt-4 text-xl font-bold text-white">Latina</h2>
                                    <p className="text-sm text-white/50">South America</p>
                                </div>
                                <img src="https://source.unsplash.com/tVqQSfXQ_SI" class="h-full w-full rounded-xl object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <div>
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
                                services: ['Frontend','UI/UX',]
                            },
                            {
                                image: 'next',
                                name: 'Next JS',
                                desc: `A full-stack framework that can be used to create a website's user interface on the front end and to manage databases and the rendering process on the back end.`,
                                services: ['Backend','Serverless functions',]
                            },
                            {
                                image: 'firebase',
                                name: 'Firebase',
                                desc: 'A service backed by Google which is an application development software that enables developer to develop iOS, Android and Web apps.',
                                services: ['Firestore database','Authentication',]
                            },
                        ].map((stack) => {
                            return (
                                <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white" key={stack}>
                                    <div className="grid place-content-center">
                                        <Image src={`/${stack.image}.png`} width={100} height={100} alt={`${stack.name} image`} />
                                    </div>
                                    <h3 className="text-lg font-medium pt-8 pb-2">
                                        { stack.name }
                                    </h3>
                                    <p className="py-2">
                                        { stack.desc }
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
                    </div>
                </section> */}
            </main>
        </>
    );
}

export default Home;
