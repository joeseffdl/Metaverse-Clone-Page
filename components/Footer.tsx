import {
  AiFillGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiFillGoogleCircle,
} from "react-icons/ai"
import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "../utils/motion";
import Link from "next/link";

const Footer = () => {
  
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white ">
              Reach me through my socials.
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright &copy; {getCurrentYear()} Joseph De Leon. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/joeseffdl">
                <AiFillGithub className="text-white w-6 h-6 hover:-translate-y-1 ease-in-out duration-300" />
              </Link>
              <Link href="https://www.facebook.com/VerdantMusicZeph/">
                <AiFillFacebook className="text-white w-6 h-6 hover:-translate-y-1 ease-in-out duration-300" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCzz71vh75tZOhTMIf-Fc4vw">
                <AiFillYoutube className="text-white w-6 h-6 hover:-translate-y-1 ease-in-out duration-300" />
              </Link>
              <Link href="mailto: joeseffdl@gmail.com">
                <AiFillGoogleCircle className="text-white w-6 h-6 hover:-translate-y-1 ease-in-out duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
export default Footer;
