import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

type ExperienceProps = {
  imgUrl: string;
  title: string;
  subtitle: string;
  index: number;
  role: string[];
};

const ExperienceCard = ({ imgUrl, title, subtitle, index, role}: ExperienceProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row"
  >
    {/* <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    /> */}
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-5xl">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-white">
          {subtitle}
        </p>
        {role.map((role, index) => (
          <ul key={index}>
            <li className="mt-[16px] font-normal lg:text-[12px] text-[10px] text-white list-disc list-inside">
              {role}
            </li>
          </ul>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ExperienceCard;
