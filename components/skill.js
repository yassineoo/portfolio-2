import {motion } from 'framer-motion'
export default function Skill({skill}) {
  const {Icon , name ,level} = skill;
  const variants ={
    initial :{width : 0} ,
    animate : {
       width:`${level}%` ,
  transition :{
    duaration:0.4,
    type : 'spring' ,
    damping : 10 ,
    stifness :100
  }
}
}


  
  
    return (
    <div className='my-2 text-white bg-gray-300 rounded-full'>
        <motion.div
        variants = {variants}
        initial='initial'
        animate='animate'
         className='flex px-4 py-1 items-center rounded-full justify-center  bg-gradient-to-r from-green to-blue-600'
        style={{width: `${level}%`}}>
          <Icon className='mr-3' />
          <h5>{name}</h5>
        </motion.div>
    </div>
  )
}
