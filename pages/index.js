import ServiceCard from "../components/serviceCard"
import { services } from "../data"
import { fadeUp, routeAnimation, stragger } from "../motion"
import { motion } from "framer-motion"
export default function Main() {

  return (

   <motion.div variants={routeAnimation} exit='exit' initial='initial' animate='animate' className='flex flex-col flex-grow pt-1 rounded-lg'>
   <h5 className="px-6 my-3 font-meduim">Computer Science student who is
    really passionate about web development,
     Proficient with JavaScript and its frameworks both backend and frontend, Possess more than 3 years of hands-on experience building and testing deffrent web applications </h5>
   <div className='flex flex-col flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500'>
      <h6 className="font-bold tracking-wide">What I Offer</h6>
      <motion.div variants={stragger} initial='initial' animate ='animate'
      className="grid   md:grid-cols-2 ">
        {
          services.map(service =>
          (
            <motion.div variants={fadeUp} 
             key={service.title} className='m-2 bg-gray-200 dark:bg-dark-200  rounded-lg lg:col-span-1'>
          <ServiceCard  service={service} />
          </motion.div>) 
          )
        }
      </motion.div>

   </div>
  
</motion.div>
  )
}
