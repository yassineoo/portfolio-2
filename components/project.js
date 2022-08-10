import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose} from 'react-icons/md'
import { fadeUp, stragger } from '../motion';
import { motion } from 'framer-motion';
export default function Project({proj , setShowData ,showData}) {
   

    return (
    <div >
        <Image src={proj.image_path}  alt='proj-image' width={300} height={150} layout='responsive' 
        className='cursor-pointer' 
        onClick={()=>{setShowData(proj.id)}}
        />
        <p className='my-2 text-center'>{proj.name}</p>
    { showData == proj.id && (
        <motion.div variants={stragger} animate='animate' initial='initial' className='p-2 rounded-lg md:p-10 grid md:grid-cols-2 absolute left-0 z-10 w-full gap-x-12 top-0 dark:bg-dark-100 bg-gray-100'>
            <motion.div variants={fadeUp}>
               <div className='border-4 border-gray-400'>
                <Image className='cursor-pointer' width={300} height={150} layout='responsive'

                src={proj.image_path} alt='proj-image'/>
               </div>
                <motion.div  variants={fadeUp} className='flex justify-center items-center space-x-5 my-4'>

                        <a href={proj.github_url} className='flex justify-center items-center space-x-2 px-4 py-2 text-lg  bg-gray-200 dark:bg-dark-200'>
                            <AiFillGithub/> <span> Github</span>
                        </a>
                        <a href={proj.deployed_url} className='flex justify-center items-center space-x-2 px-4 py-2 text-lg  bg-gray-200 dark:bg-dark-200'>
                            <AiFillProject/><span> Project</span>
                        </a>
                </motion.div>
            </motion.div>
            <motion.div variants={stragger} animate='animate' initial='initial'>

                <motion.h2 variants={fadeUp} className='mb-3 text-ld font-medium md:text-2xl'>{proj.name}</motion.h2>
                <motion.h3 variants={fadeUp}>{proj.description}</motion.h3>
                <motion.div  variants={fadeUp}  className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                    {
                        proj.key_techs.map(tech => (<span key={tech} className='px-2 py-1 rounded-sm my-1 bg-gray-200 dark:bg-dark-200'>
                            {tech}
                        </span>))
                    }
                </motion.div>
            </motion.div>

            <button className='absolute top-3 right-3 rounded-full bg-gray-200 dark:bg-dark-200 focus:outline-none'
            onClick={()=>{setShowData(null)}}>
                <MdClose size={30} />
            </button>

        </motion.div>
    )}  
     
    </div>
  )
}
