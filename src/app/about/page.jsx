"use client";
import { delay, easeInOut, motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const {scrollYProgress} = useScroll({container:containerRef })

  const skillRef = useRef();
  const refInView = useInView(skillRef,{margin:"-100px "})

  const experienceRef = useRef();
  const isExperienceInView = useInView(experienceRef,{margin:"-100px "})


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0  xl:w-1/2">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
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
            <motion.svg 
              initial={{opacity:0.2, y:0}}
              animate={{opacity:1, y:"10px"}}
              transition={{repeat:Infinity, duration: 3, ease: "easeInOut"}}

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
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef }>
            {/* SKILL TITLE */}
            <motion.h1 initial={{x:'-300px'}} animate={refInView? {x:0}:{}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* SKILL LIST */}
            <motion.div initial={{x:'-300px'}} animate={refInView? {x:0}:{}}  className='flex gap-4 flex-wrap'> 
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> JavaScript </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> HTML </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> CSS </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> REACT </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> Tailwind css </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> Node.js </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> Next.js </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> MySQL </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> PostgreSQL </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> Express.js </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> Framer Motion </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'> MongoDB </div>
              <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>  Git</div>

              


            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
            initial={{opacity:0.2, y:0}}
            animate={{opacity:1, y:"10px"}}
            transition={{repeat:Infinity, duration: 3, ease: "easeInOut"}}
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
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1 initial={{x:'-400px'}} animate={isExperienceInView? {x:0}:{}} transition={{delay:0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <div className=''> 

              {/* FIRST LIST ITEM */}
              <div className='flex justify-center h-48'> 
                {/* LEFT */}
                <motion.div initial={{x:'-300px'}} animate={isExperienceInView? {x:0}:{}} transition={{delay:0.4}} className='w-1/3'>
                  {/* JOB TITLE   */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior JavaScript Engineer</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'> My Current employment way better than the position before!</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>APPLE</div>
                </motion.div>
                {/* CENTER */}
                <div className='flex w-1/6 justify-center items-center'>
                  {/* LINE */}
                  <div className='w-1 h-full rounded bg-gray-600 relative'>
                    {/* line circle */}
                    <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>                 
              </div>

              {/* SECOND   LIST ITEM */}
              <div className='flex justify-center h-48'> 
                {/* LEFT */}
                <div className='w-1/3'>
                  
                </div>
                {/* CENTER */}
                <div className='flex w-1/6 justify-center items-center'>
                  {/* LINE */}
                  <div className='w-1 h-full rounded bg-gray-600 relative'>
                    {/* line circle */}
                    <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <motion.div className='w-1/3' initial={{x:'+300px'}} animate={isExperienceInView? {x:0}:{}} transition={{delay:0.4}}>
                {/* JOB TITLE   */}
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior JavaScript Engineer</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'> My Current employment way better than the position before!</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>APPLE</div>
                </motion.div>                 
              </div>

              
              {/* THIRD LIST ITEM */}
              <div className='flex justify-center h-48'> 
                {/* LEFT */}
                <motion.div className='w-1/3' initial={{x:'-300px'}} animate={isExperienceInView? {x:0}:{}} transition={{delay:0.4}}>
                  {/* JOB TITLE   */}
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior JavaScript Engineer</div>
                  {/* JOB DESC */}
                  <div className='p-3 text-sm italic'> My Current employment way better than the position before!</div>
                  {/* JOB DATE */}
                  <div className='p-3 text-red-400 text-sm font-semibold'>2024 - Present </div>
                  {/* JOB COMPANY */}
                  <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>APPLE</div>
                </motion.div>
                {/* CENTER */}
                <div className='flex w-1/6 justify-center items-center'>
                  {/* LINE */}
                  <div className='w-1 h-full rounded bg-gray-600 relative'>
                    {/* line circle */}
                    <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-red-400 -left-2'></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className='w-1/3'></div>                 
              </div>

              
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress}/></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
