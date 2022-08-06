export default    function NavbarItem  ({value ,handleFilter,active})  {
    return (
        
      <span  onClick={()=>{handleFilter(value)}} className ={`hover:text-green ${active==value && 'text-green underline'} capitalize cursor-pointer`}>{value}</span>
      )
  }