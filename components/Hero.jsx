export default function Hero() {
    return (
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
    )
};
