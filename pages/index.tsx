import React from "react";

import { motion } from "framer-motion";
import { TagRotate } from "../components/shared/Tag";

const Home = () => (
  <div>
    <motion.div className="flex flex-col items-center justify-between h-screen w-screen px-64 pb-2">
      <div id="MainBody">
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl my-2"
        >
          Hi, I'm <br />
          <motion.b
            style={{
              cursor:
                "url('https://openmoji.org/data/color/svg/270C-1F3FD.svg'), auto",
            }}
            className="text-6xl"
            whileHover={{
              textShadow: ` 
					-5px  -5px 0px  #eb452b, 
					-10px -10px 0px #efa032, 
					-15px -15px 0px #46b59b, 
					-20px -20px 0px #017e7f, 
					-25px -25px 0px #052939`,
              rotate: 12,
              y: 20,
            }}
          >
            Rishi!
          </motion.b>
        </motion.h1>
        <motion.div style={{ display: "flex", alignContent: "space-around" }}>
          <TagRotate
            text="he/him"
            invert
            emoji="https://openmoji.org/data/color/svg/1F468-1F3FE-200D-1F4BB.svg"
          />
          <TagRotate
            text="Hack Clubber"
            invert
            emoji="https://openmoji.org/data/color/svg/1F3DB.svg"
          />
          <TagRotate
            text="he/him"
            invert
            emoji="https://openmoji.org/data/color/svg/1F468-1F3FE-200D-1F4BB.svg"
          />

          <TagRotate
            text="he/him"
            invert
            emoji="https://openmoji.org/data/color/svg/1F468-1F3FE-200D-1F4BB.svg"
          />
          <TagRotate
            text="he/him"
            invert
            emoji="https://openmoji.org/data/color/svg/1F468-1F3FE-200D-1F4BB.svg"
          />
          <TagRotate
            text="he/him"
            invert
            emoji="https://openmoji.org/data/color/svg/1F468-1F3FE-200D-1F4BB.svg"
          />
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default Home;
