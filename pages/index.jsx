import Head from "next/head"
import Image from "next/image"
import zephy from "../public/zephy.jpg"
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <>
            <Head>
                <title>E-Portfolio by Joseph De Leon</title>
                <meta name="description" content="Portfolio by Joseph De Leon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="
                scroll-smooth
                lg:px-40
                md:px-20
                px-10 pt-20
                bg-orange-200/75">
                <section className="py-10">
                    <div className="text-center p-10">
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
                    </div>
                </section>
                <section>
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
                </section>
                
            </main>
        </>
    )
}

export default Home;
