import React from 'react';
import { Tilt } from 'react-tilt';

import {motion} from 'framer-motion';
import  SectionWrapper  from '../assets/hof/index';
import Styles from '../Styles';
  import {Services} from '../constants/index';
  import {fadeIn, textVariant} from '../utils/motion'




  const ServiceCard = ({index,title,icon})=>{

    return(
 
       <Tilt className="xs:w-[250px] w-full">
      <motion.div     variants={fadeIn("right", "spring",0.5  ,0.75 ) } className="w-full green-pink-gradient p-[1px] rounded-[20px]">

         

      
        <div options={{max: 45,scale:1, speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly ietms-center flex-col' >



          <img src={icon} alt={title} className="w-16 h-16 object-contain justify-content text-center align-center m-auto"></img>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>


      </motion.div>
      
       </Tilt>
       
       )
         
       }
   



class About extends React.Component {



    

  render() {
  
  
  
  
    return  (
    
  
    
    
    <>   
    <motion.div className='text-center flex flex-col'>
   <p className={Styles.sectionSubText}>Introduction</p>


    <h2 className={Styles.sectionHeadText}>OverView</h2>



    </motion.div>


    <motion.p
    variants={fadeIn("", "",0.1, 1 ) }
    className="mt-4 text-secondary text-[17px]  max-w-3xl flex felx-col justify-content-center text-center align-center m-auto p-[20px]  leading-[30px]"
    >

      Hi my name is Aman i am an Ui Developer with Experience in 
      Html,
      Css,
      Js,
      React JS,
      Bootstrap,
      Tailwind CSS

      “I have just over a year of experience as a junior software engineer with Above Mentioned Technology. In my short time there, I've already contributed to over a dozen projects and Deployed several website that are being used by myself sometimes.



    </motion.p>



    <div className='gap-10 flex flex-wrap gap-10 mt-20 m-auto align-center mx-70 justify '> 


    {Services.map(( service,index,title )=>( 

   <ServiceCard key={service.title} index={service.index} title={title} {...service}/>


    ) )}



    </div>
  
</>
 
    )
    
  }
}

  export default SectionWrapper(About,"about")