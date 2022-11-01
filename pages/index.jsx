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

function Home() {
    return (
        <>
            <Head>
                <title>E-Portfolio by Joseph De Leon</title>
            </Head>
            <main className="
                lg:px-40
                md:px-20
                px-10 pt-20
                ">
                <section className="py-10">
                    <div className="text-center p-10">
                        <h2 className="
                            md:text-6xl
                            text-4xl py-2 text-teal-600 font-semibold">
                            Joseph De Leon
                        </h2>
                        <h3 className="
                            md:text-3xl
                            text-2xl py-2 font-medium">
                            Full Stack Web Developer
                        </h3>
                        <p className="
                            md:text-xl
                            text-md max-w-lg mx-auto py-5 leading-8 text-gray-800">
                            Computer Engineering student from Polytechnic University of the Philippines, Mabini Campus. 
                        </p>
                    </div>
                    
                    <div className="
                        md:h-96 md:w-96
                        relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
                        <Image src={zephy} layout="fill" objectFit="cover" alt="Image of Joseph De Leon" />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl pt-20 py-2">Main Tech Stack</h3>
                        <p className="text-md py-2 leading-8 text-gray-800">For building the frontend part of my application, I mainly use <a href="https://reactjs.org/"><span className="text-teal-500">React JS</span></a> which is JavaScript library for building user interfaces. While expanding its capabilities alongside with <a href="https://nextjs.org/"><span className="text-teal-500">Next JS</span></a> to streamline the development process.</p>
                        <p className="text-md py-2 leading-8 text-gray-800">I also use <a href="https://firebase.google.com/"><span className="text-teal-500">Firebase</span></a> for the backend of my application which I took advantage of its database and authentication services. Wherein I host and deploy my application in <a href="https://vercel.com/"><span className="text-teal-500">Vercel</span></a>.</p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
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
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
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
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
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
                            Portfolio
                        </h3>
                        <p className="text-md py-2 leading-8 text-gray-800">Lorem, <span className="text-teal-500">ipsum dolor</span> sit amet consectetur adipisicing elit. Voluptas molestiae quod labore harum ad provident modi eveniet earum accusamus nam voluptate debitis, architecto quae alias deserunt error. Consequuntur, laboriosam.</p>
                        <p className="text-md py-2 leading-8 text-gray-800">Lorem, <span className="text-teal-500">ipsum dolor</span> sit amet consectetur adipisicing elit. Voluptas molestiae quod labore harum ad provident modi eveniet earum accusamus nam voluptate debitis, architecto quae alias deserunt error. Consequuntur, laboriosam.</p>
                    </div>
                    <div className="
                        lg:flex-row lg:flex-wrap
                        flex flex-col gap-10 py-10">
                        <div className="basis-1/3 flex-1 shadow-lg p-1 rounded-xl">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageOne} alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageTwo}
                                alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-1 rounded-xl">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageThree}
                                alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-2 rounded-xl">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageFour}
                                alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1 shadow-lg p-6 rounded-xl">
                            <Image
                                className="rounded-lg object-cover mx-auto"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageFive}
                                alt="Image" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
