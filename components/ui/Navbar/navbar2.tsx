import React from 'react'

import { IoIosSearch } from "react-icons/io";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../navigation-menu';
import { cn } from '@/lib/utils';

const NavbarComponents2 = () => {

  const components: { title: string; href: string; }[] = [
    {
      title: "Man",
      href: "/docs/primitives/alert-dialog"
    },
    {
      title: "Woman",
      href: "/docs/primitives/hover-card"
    }
  ]

  return (
    <>
      <nav className=' flex justify-between items-center px-16 py-5'>
         <div className=' flex items-center justify-center'>
            <h1 className="font-bold text-2xl">Main Nav</h1>
         </div>
         <div className='flex items-center justify-center'>

       <NavigationMenu>
         <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><h1 className="font-bold text-sm  px-2">Shoes</h1></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
           
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  href={component.href}
                >
                   {component.title}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      </NavigationMenu>

         </div>
         <div>
            <div className='relative flex items-center'>
              <button className='absolute z-10 p-2  border rounded-full overflow-hidden bg-slate-200'><IoIosSearch /></button>
              <input className='  pl-10 w-44 outline-none border bg-gray-100  hover:bg-gray-300 rounded-full h-9' placeholder='test' type="text" name="test" id="test" />   
            </div>
        </div>  
      </nav> 
    </>
  )
}

export default NavbarComponents2

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block cursor-pointer py-1 text-slate-500 select-none  w-[200px] rounded-md px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-slate-900 focus:bg-accent focus:text-accent-foreground ", 
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
