import NavbarItem from "./navBarItem";

export default function ProjectsNavbar(props) {
  return (
    <div className="flex space-x-3 px-3 py-2 overfollow-x-auto">
        <NavbarItem value='all' {...props}/>
        <NavbarItem value='Nextjs' {...props}/>
        <NavbarItem value='react' {...props}/>
        <NavbarItem value='Mongo' {...props}/>
        <NavbarItem value='Node' {...props}/>
    </div>
  )
}


