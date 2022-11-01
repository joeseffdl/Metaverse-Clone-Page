import React from "react";
import {AiFillGithub, AiFillFacebook, AiFillYoutube} from "react-icons/ai"

function Footer() {
    return (
        <section className="py-10 font-burtons">
            <div className="text-3xl font-semibold  flex justify-center">
                Socials
            </div>
            <ul className="text-5xl flex justify-center gap-12 py-3">
                <li className="hover:-translate-y-1 ease-in-out duration-300">
                    <a href="https://github.com/joeseffdl">
                        <AiFillGithub className="text-black" />
                    </a>
                </li>
                <li className="hover:-translate-y-1 ease-in-out duration-300">
                    <a href="https://www.facebook.com/VerdantMusicZeph/">
                        <AiFillFacebook className="text-blue-900" />
                    </a>
                </li>
                <li className="hover:-translate-y-1 ease-in-out duration-300">
                    <a href="https://www.youtube.com/channel/UCzz71vh75tZOhTMIf-Fc4vw">
                        <AiFillYoutube className="text-red-600" />
                    </a>
                </li>
            </ul>
        </section>
  )
}

export default Footer;
