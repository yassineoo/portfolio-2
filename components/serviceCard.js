
export default function ServiceCard({service}) {
 const  {Icon , about ,title} = service
    const creatMarkUp = () => {
       return { __html: about ,}
    }
 return (
    <div className='flex items-center justify-center p-3 space-x-4 '>
        <Icon className='w-12 h-12 text-green'/>
        <div>
            <h4 className='font-bold'>{title}</h4>
            <p className="text-gray-700 dark:text-gray-100 text-sm " dangerouslySetInnerHTML={creatMarkUp()} />
        </div>
    </div>
  )
}
