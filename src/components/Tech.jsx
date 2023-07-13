import React from 'react'

import {BallCanvas} from "./canvas"

import SectionWrapper from  "../assets/hof/index"

import { Technologies }from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">

{Technologies.map((technology)=>(
  
  
  
  
  <div className="w-28 h-28" key={technology.name} >{technology.name}
  
  <BallCanvas icon={technology.icon}/>{}
  
  
  </div>
  ))}
 
</div>

  )
}

export default SectionWrapper(Tech,'tech')