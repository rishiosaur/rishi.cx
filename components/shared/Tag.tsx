import { motion } from "framer-motion";
import { useState } from "react";

const Tag = ({
  text,
  bg = "black",
  fg = "white",
  fgDark = "black",
  bgDark = "white",
  invert = false,
  emoji = "false",
  ...rest
}) => (
  <motion.div
    {...rest}
    className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-${
      !invert ? bg : bgDark
    } text-${!invert ? fg : fgDark} dark:bg-${
      !invert ? bgDark : bg
    } dark:text-${!invert ? fgDark : fg} rounded-full`}

    style={{
        cursor: emoji !== "false" ? `url('${emoji}'), auto` : "auto"
    }}
  >
    {text}
  </motion.div>
);

export default Tag;
export const TagRotate = ({ text, ...rest }) => {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <Tag
        {...rest}
        text={text}
        whileHover={{
          rotate: 12,
        }}
      />
    </div>
  );
};
