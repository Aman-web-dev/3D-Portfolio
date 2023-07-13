import {motion} from 'framer-motion'


import Styles from '../../Styles'


import { staggerContainer } from '../../utils/motion'


const  SectionWrapper=(Component,idName )=>

function HOC(){


    return(


        <motion.section
        
            variants={staggerContainer()}

            initial ="hidden"

            whileInView="show"


            viewport={{once: true , amount :0.50}}
            
           className={` ${Styles.padding} max-w-7xl mx-auto relative z-0`}
        >
             <span  className='Hash-Span' id={idName} href={`#${idName}`}> 

             &nbsp;

             </span>

            <Component/>
        </motion.section>
    )   
}

export default SectionWrapper
