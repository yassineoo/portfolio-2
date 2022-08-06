import NavbarItem from "./navBarItem";

export default function ProjectsNavbar(props) {
  return (
    <div className="flex space-x-3 px-3 py-2 overfollow-x-auto">
        <NavbarItem value='all' {...props}/>
        <NavbarItem value='react' {...props}/>
        <NavbarItem value='django' {...props}/>
        <NavbarItem value='mongo' {...props}/>
        <NavbarItem value='node' {...props}/>
    </div>
  )
}


