import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

type TextType = {
  title: string;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TextType) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-white ${textStyles}`}
  >
    {Array.from(title).map((char, index) => (
      <motion.span variants={textVariant2} key={index}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: string | JSX.Element;
  textStyles?: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
