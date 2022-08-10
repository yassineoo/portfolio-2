import Skill from "../components/skill"

import { tools,languages } from "../data" 
import {motion } from 'framer-motion'
import { fadeUp, routeAnimation } from "../motion"
export default function Resume() {

  return (
    <motion.div variants={routeAnimation} exit='exit' initial='initial' animate='animate' className="px-6 py-2 ">
      <motion.div 
      variants={fadeUp}
      initial='initial'
      animate='animate'
      className="grid gap-6 md:grid-cols-2">
         <div className=''>
          <h5 className='font-bold my-3 text-2xl'>Education</h5>
            <div>
            <h3 className='font-bold my-2 text-xl'>Copmuter Sience Engeniring</h3>
            <h3>ESI-ALgeries 2021-now</h3>
            <h3>ESI-Sba 2019-2021</h3>
            </div>
         </div>
         <div className=''>
          <h5 className='font-bold my-3 text-2xl'>Experience</h5>
            <div>
            <h3 className='font-bold my-2 text-xl'>Freenlecer </h3>
            <h3>UPwork 2022-now</h3>
            
            </div>
         </div>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
                  <div className=''>
                  <h2 className="my-3 text-2xl font-bold">language & frameworks </h2>
                    <div className='my-2'>

                    {languages.map(lang => ( <Skill skill={lang} key={lang.name} />))}
                    </div>
                  </div>


                  <div className=''>
                  <h2 className="my-3 text-2xl font-bold">TOOls/ </h2>
                    <div className='my-2'>

                    {tools.map(lang => ( <Skill key={lang.name} skill={lang} />))}
                    </div>
                  </div>
              
      </div>
    </motion.div>
  )
}
