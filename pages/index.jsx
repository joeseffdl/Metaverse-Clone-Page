import Head from "next/head"
import Image from "next/image"
import {AiFillTwitterCircle, AiFillFacebook, AiFillYoutube} from "react-icons/ai"
import zephy from "../public/zephy.jpg"
import serviceOne from "../public/serviceOne.jpg"
import serviceTwo from "../public/serviceTwo.jpg"
import serviceThree from "../public/serviceThree.jpg"
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
                px-10">
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis corporis esse expedita iste nulla ut quam nesciunt rem pariatur provident!
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                        <AiFillTwitterCircle />
                        <AiFillFacebook />
                        <AiFillYoutube />
                    </div>
                    <div className="
                        md:h-96 md:w-96
                        relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
                        <Image src={zephy} layout="fill" objectFit="cover" alt="Image of Joseph De Leon" />
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="text-3xl py-1">Services I offer</h3>
                        <p className="text-md py-2 leading-8 text-gray-800">Lorem, <span className="text-teal-500">ipsum dolor</span> sit amet consectetur adipisicing elit. Voluptas molestiae quod labore harum ad provident modi eveniet earum accusamus nam voluptate debitis, architecto quae alias deserunt error. Consequuntur, laboriosam.</p>
                        <p className="text-md py-2 leading-8 text-gray-800">Lorem, <span className="text-teal-500">ipsum dolor</span> sit amet consectetur adipisicing elit. Voluptas molestiae quod labore harum ad provident modi eveniet earum accusamus nam voluptate debitis, architecto quae alias deserunt error. Consequuntur, laboriosam.</p>
                    </div>
                    <div className="lg:flex gap-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <Image src={serviceOne} width={100} height={100} alt="Service one image" />
                            <h3 className="text-lg font-medium pt-8 pb-2">
                                Service One
                            </h3>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia architecto asperiores maiores, exercitationem quam aliquam quas dicta! Aliquam, iste!
                            </p>
                            <h4 className="py-4 text-teal-600">
                                Tools I used in this service
                            </h4>
                            <ul>
                                <li className="text-gray-800 py-1">Tool 1</li>
                                <li className="text-gray-800 py-1">Tool 2</li>
                                <li className="text-gray-800 py-1">Tool 3</li>
                                <li className="text-gray-800 py-1">Tool 4</li>
                            </ul>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <Image src={serviceTwo} width={100} height={100} alt="Service two image" />
                            <h3 className="text-lg font-medium pt-8 pb-2">
                                Service Two
                            </h3>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia architecto asperiores maiores, exercitationem quam aliquam quas dicta! Aliquam, iste!
                            </p>
                            <h4 className="py-4 text-teal-600">
                                Tools I used in this service
                            </h4>
                            <ul>
                                <li className="text-gray-800 py-1">Tool 1</li>
                                <li className="text-gray-800 py-1">Tool 2</li>
                                <li className="text-gray-800 py-1">Tool 3</li>
                                <li className="text-gray-800 py-1">Tool 4</li>
                            </ul>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10">
                            <Image src={serviceThree} width={100} height={100} alt="Service three image" />
                            <h3 className="text-lg font-medium pt-8 pb-2">
                                Service Three
                            </h3>
                            <p className="py-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto mollitia architecto asperiores maiores, exercitationem quam aliquam quas dicta! Aliquam, iste!
                            </p>
                            <h4 className="py-4 text-teal-600">
                                Tools I used in this service
                            </h4>
                            <ul>
                                <li className="text-gray-800 py-1">Tool 1</li>
                                <li className="text-gray-800 py-1">Tool 2</li>
                                <li className="text-gray-800 py-1">Tool 3</li>
                                <li className="text-gray-800 py-1">Tool 4</li>
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
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageOne} alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageTwo}
                                alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageThree}
                                alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                                src={imageFour}
                                alt="Image" />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover"
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
