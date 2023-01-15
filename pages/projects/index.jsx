import Image from "next/image"

function Projects() {
    return (
        <>
            <main className="scroll-smooth
                lg:px-40
                md:px-20
                px-10 pt-20
                bg-orange-200/75">
                <section className="h-full mt-10 ">
                    <h3 className="text-3xl py-1">
                        Technical Skills
                    </h3>
                    <p className="text-md py-2 leading-8 text-gray-800">Even though I am currently working on my <span className="text-teal-600 font-semibold">Web Development</span> skills, I do have experience with the following technical skills such as: <span className="text-teal-600 font-semibold">Game Development, Mobile Development, <span className="text-black font-normal">and</span> Software Development</span>
                    </p>
                    <div className="
                        lg:flex-row lg:flex-wrap
                        flex flex-col gap-10 py-10">
                        {[
                            {
                                name: 'imageOne',
                                title: 'E-Portfolio',
                                desc: 'To showcase my technical skills in programming especially in Web Development and serve as an online resume.',
                                skill: 'Web Development'
                            },
                            {
                                name: 'imageTwo',
                                title: 'Clinic Management System',
                                desc: 'Designed and developed the front-end of a web-application for dentists, the project was built and deployed by a team of 4 students.',
                                skill: 'Web Development'
                            },
                            {
                                name: 'imageThree',
                                title: 'Roll Out',
                                desc: 'A 3D ball maze game intended to improve cognitive skills.',
                                skill: 'Game Development'
                            },
                            {
                                name: 'imageFour',
                                title: 'Puzzld',
                                desc: 'A 2D platformer game intended for Education and Entertainment.',
                                skill: 'Mobile Game Development'
                            },
                            {
                                name: 'imageFive',
                                title: 'Piggly Plan',
                                desc: 'An application software that is designed for Savings and Budgeting built using Java through Android Studio.',
                                skill: 'Software Development'
                            },
                        ].map((skill) => {
                            return (
                                <div className="basis-1/4 flex-1 shadow-lg p-6 rounded-xl bg-white text-center" key={skill}>
                                    <Image
                                        className="rounded-lg object-cover mx-auto"
                                        width={400}
                                        height={400}
                                        layout="responsive"
                                        src={`/${skill.name}.jpg`}
                                        alt={`${skill.name} image`} />
                                    <h3 className="text-lg font-semibold">
                                        {skill.title}
                                    </h3>
                                    <p className="pb-2">
                                        {skill.desc}
                                    </p>
                                    <h4 className="pb-4 text-teal-600 font-semibold">
                                        {skill.skill}
                                    </h4>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
  )
}

export default Projects;
