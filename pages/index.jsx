import Head from "next/head"
import Image from "next/image"
import zephy from "../public/zephy.jpg"
import react from "../public/react.png"
import next from "../public/next.png"
import firebase from "../public/firebase.png"
import imageOne from "../public/imageOne.jpg"
import imageTwo from "../public/imageTwo.jpg"
import imageThree from "../public/imageThree.jpg"
import imageFour from "../public/imageFour.jpg"
import imageFive from "../public/imageFive.jpg"
import Typewriter from 'typewriter-effect';

function Home() {
    return (
        <>
            <Head>
                <title>E-Portfolio by Joseph De Leon</title>
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
                        <Image src={zephy} layout="fill"  alt="Image of Joseph De Leon" />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl pt-20 py-2">Main Tech Stack</h3>
                        <p className="text-md py-2 leading-8 text-gray-800">For building the frontend part of my application, I mainly use <a href="https://reactjs.org/"><span className="text-teal-600 font-semibold">React JS</span></a> which is JavaScript library for building user interfaces. While expanding its capabilities alongside with <a href="https://nextjs.org/"><span className="text-teal-600 font-semibold">Next JS</span></a> to streamline the development process.</p>
                        <p className="text-md py-2 leading-8 text-gray-800">I also use <a href="https://firebase.google.com/"><span className="text-teal-600 font-semibold">Firebase</span></a> for the backend of my application which I took advantage of its database and authentication services. Wherein I host and deploy my application in <a href="https://vercel.com/"><span className="text-teal-600 font-semibold">Vercel</span></a>.</p>
                    </div>
                    <div className="lg:grid lg:grid-cols-3 gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white">
                            <div className="grid place-content-center">
                                <Image src={react} width={100} height={100} alt="ReactJS image" />
                            </div>
                            <h3 className="text-lg font-medium pt-8 pb-2">
                                React JS
                            </h3>
                            <p className="py-2">
                                An open-source JavaScript framework and library used for building interactive user interfaces and web applications.    
                            </p>
                            <h4 className="py-4 text-teal-600 font-semibold">
                                Implementation
                            </h4>
                            <ul>
                                <li className="text-gray-800 py-1">Frontend</li>
                                <li className="text-gray-800 py-1">UI/UX</li>
                            </ul>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white">
                            <div className="grid place-content-center">   
                                <Image src={next} width={100} height={100} alt="NextJS image" />
                            </div> 
                            <h3 className="text-lg font-medium pt-8 pb-2">
                                Next JS
                            </h3>
                            <p className="py-2">
                                A full-stack framework that can be used to create a website&#39;s user interface on the front end and to manage databases and the rendering process on the back end.
                            </p>
                            <h4 className="py-4 text-teal-600 font-semibold">
                                Implementation
                            </h4>
                            <ul>
                                <li className="text-gray-800 py-1">Backend</li>
                                <li className="text-gray-800 py-1">Serverless functions</li>
                            </ul>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white">
                            <div className="grid place-content-center">
                                <Image src={firebase} width={100} height={100} alt="Firebase image" />
                            </div>
                            <h3 className="text-lg font-medium pt-8 pb-2">
                                Firebase
                            </h3>
                            <p className="py-2">
                                A service backed by Google which is an application development software that enables developer to develop iOS, Android and Web apps.
                            </p>
                            <h4 className="py-4 text-teal-600 font-semibold">
                                Implementation
                            </h4>
                            <ul>
                                <li className="text-gray-800 py-1">Firestore Database</li>
                                <li className="text-gray-800 py-1">Authentication</li>
                            </ul>
                        </div>
                        
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1">
                            Technical Skills
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-800">Even though I am currently working on my <span className="text-teal-600 font-semibold">Web Development</span> skills, I do have experience with the following technical skills such as: <span className="text-teal-600 font-semibold">Game Development, Mobile Development, <span className="text-black font-normal">and</span> Software Development</span>
                        </p>
                    </div>
                    <div className="
                        lg:flex-row lg:flex-wrap
                        flex flex-col gap-10 py-10">
                        <div className="basis-1/3 flex-1 shadow-lg p-1 rounded-xl bg-white text-center">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageOne} alt="Image" />
                            <h3 className="text-lg font-medium">
                                E-Portfolio
                            </h3>
                            <p className="pb-2">
                                To showcase my technical skills in programming especially in Web Development and serve as an online resume
                            </p>
                            <h4 className="pb-4 text-teal-600 font-semibold">
                                Web Development
                            </h4>
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl bg-white text-center">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageTwo}
                                alt="Image" />
                            <h3 className="text-lg font-medium">
                                Clinic Management System
                            </h3>
                            <p className="pb-2">
                                Designed and developed the front-end of a web-application for dentists, the project was built and deployed by a team of 4 students.
                            </p>
                            <h4 className="pb-4 text-teal-600 font-semibold">
                                Web Development
                            </h4>
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-1 rounded-xl bg-white text-center">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageThree}
                                alt="Image" />
                            <h3 className="text-lg font-medium">
                                Roll Out
                            </h3>
                            <p className="pb-2">
                                A 3D ball maze game intended to improve cognitive skills.
                            </p>
                            <h4 className="pb-4 text-teal-600 font-semibold">
                                Game Development
                            </h4>
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-2 rounded-xl bg-white text-center">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageFour}
                                alt="Image" />
                            <h3 className="text-lg font-medium">
                                Puzzld
                            </h3>
                            <p className="pb-2">
                                A 2D platformer game intended for Education and Entertainment.
                            </p>
                            <h4 className="pb-4 text-teal-600 font-semibold">
                                Mobile Game Development
                            </h4>
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-6 rounded-xl bg-white text-center">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageFive}
                                alt="Image" />
                            <h3 className="text-lg font-medium">
                                Piggy Plan
                            </h3>
                            <p className="pb-2">
                                An application software that is designed for Savings and Budgeting built using Java through Android Studio.
                            </p>
                            <h4 className="pb-4 text-teal-600 font-semibold">
                                Software Development
                            </h4>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
