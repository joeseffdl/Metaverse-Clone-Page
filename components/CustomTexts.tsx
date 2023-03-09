import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion"

export const TypingText = ({ title, textStyles }: {title: string, textStyles: string}) => (
    <motion.p
        variants={textContainer}
        className={`font-normal text-[14px] text-white ${textStyles}`}
    >
        {Array.from(title).map((char, index) => (
            <motion.span
                variants={textVariant2}
                key={index}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </motion.p>
)

export const TitleText = () => <h2>Title Text</h2>
