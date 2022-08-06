import  { useState } from 'react'
import Project from '../components/project'
import ProjectsNavbar from '../components/projectsNavbar'
import {projects as data} from '../data'
import { motion } from 'framer-motion'
import { fadeUp, routeAnimation, stragger } from '../motion';
export default function Projects() {
  const [projects ,setProjects] = useState(data);
  const [active ,setActive] = useState('all');
  const [showData ,setShowData] = useState(null);
  const handleFilter = (val) => {
    if (val==='all')  {
      setProjects(data) ;
      setActive(val); }
  else  { 
    setProjects(data.filter((proj => proj.category.includes(val))))
    console.log(projects) 
    setActive(val); }
  
  }

  return (
    <motion.div variants={routeAnimation} exit='exit' initial='initial' animate='animate' className='px-5 py-2 overflow-y-scroll' style={{height:"65vh"}}>
      <div display ='flex justify-center items-center space-x-4'>
        <ProjectsNavbar handleFilter={handleFilter} active = {active}/>
       
      </div>
      <motion.div variants={stragger} initial='initial' animate='animate' className='grid gap-4 my-3 grid-cols-12 relative'>
        {projects.map( proj => (
          <motion.div variants={fadeUp}  key={proj.name} className='col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200'>
          <Project  proj = {proj} showData={showData} setShowData={setShowData} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
