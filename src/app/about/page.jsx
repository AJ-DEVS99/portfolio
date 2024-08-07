"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY TEXT */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum odor amet, consectetuer adipiscing elit.g
            </span>
            {/* BIOGRAPHY SIGN */}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 381"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M257 261C257.222 258.783 258.45 256.482 259.222 254.444C264.505 240.517 270.978 227.048 276.778 213.333C293.426 173.968 312.647 136.371 332 98.3333C345.846 71.1179 355.905 41.9737 357.778 11.3333C357.782 11.2577 358.281 1.64434 357.333 2.33333C352.397 5.92336 350.449 17.1215 348.278 22.3333C337.738 47.6292 330.32 73.2395 324.056 99.9444C316.635 131.581 307.908 162.844 303.444 195.111C298.937 227.69 303.538 277.566 339.333 291.333C342.661 292.613 354.535 297.128 356.5 291.889C358.666 286.114 359.272 281.758 355.611 276.556C347.89 265.583 337.479 257.514 326.556 249.889C300.219 231.505 272.927 214.048 244.333 199.389C213.225 183.44 180.59 169.68 147 159.889C124.024 153.192 98.2502 146.319 74 148.444C69.7021 148.821 60 151.125 60 157C60 158.935 60.934 159.728 62.7778 160.611C68.9463 163.567 76.7362 164.478 83.3333 165.444C104.454 168.537 125.774 170.056 147.056 171.5C295.232 181.551 443.299 190.778 591.889 190.778C641.841 190.778 691.98 190.194 741.556 183.444C748.009 182.566 768.182 182.424 773 176"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M462 132C462.365 148.806 468.983 165.234 471.556 181.778C476.81 215.572 477.006 256.48 460.222 287.222C448.556 308.59 429.22 324.612 408.667 337C374.65 357.503 336.672 369.577 297.333 374.444C199.601 386.538 99.5431 374.234 2 366"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M431 56C435.983 65.9661 442.2 74.9577 450.222 82.7778C479.514 111.332 514.543 77.1263 541 61"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* SCROLL SVG  */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* SKILLS */}
          <div className="">SKILLS</div>
          {/* EXPERIENCE */}
          <div className="">EXPERIENCE </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
