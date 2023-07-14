import React from "react";
import { Tilt } from "react-tilt";
import {motion} from 'framer-motion';
import Styles from '../styles';
import { github } from '../assets';
import {fadeIn, textVariant} from '../utils/motion';

// import { Projects } from '../../src/constants/index';

import { Projects } from '../constants';


import SectionWrapper from '../assets/hof';


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className=' mx-[15%] w-[80%]'>
    
<motion.div variants={textVariant()}>
  <p className={Styles.sectionSubText}>What I built In 1 Year</p>
<h2 className={Styles.sectionHeadText}>Projects</h2>
  </motion.div>
  

  <div className="w-full flex w-[80%]">
<motion.p
className='mt-3 text-secondary text-[17px]  max-w-3xl  leading-[30px]'
variants={fadeIn("","",0.1,1 )}
>


In my project section, you'll find a collection of endeavors that represent my commitment to improving my skills. These projects were born out of a desire to learn and grow. I embarked on this journey by utilizing resources such as YouTube, Bootstrap, and ChatGPT to build visually appealing designs with interactive features. Although these projects are still evolving, I am dedicated to continuous improvement and hard work. Come along on this exciting journey of progress, as I strive to create captivating experiences that make a lasting impression.




</motion.p>


  </div>


  <div className='mt-20 flex flex-wrap gap-7 '>

    {Projects.map((project,index)=>(

      <ProjectCard key={`project-${index}`}
      {...project}
      
      />
    ))} 


  </div>

    </div>
  )
}

export default Works