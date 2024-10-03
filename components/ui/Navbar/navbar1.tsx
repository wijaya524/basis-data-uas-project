"use client"

import * as React from "react"


import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const components: { title: string; href: string; }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog"
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card"
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress"
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs"
  },

  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip"
  },
]

export function NavbarComponents1() {
  return (
    <>
    <nav className="w-full flex justify-between items-center bg-gray-200 px-16">
      <h1>top-nav</h1>
    <NavigationMenu  >
    <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> <Link href="/"><h1 className="font-bold text-sm border-r-2 border-black px-2">Find a store</h1></Link></NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger><h1 className="font-bold text-sm  border-r-2 border-black px-2">Help</h1></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              <h1 className="font-bold text-lg  pb-2 px-3">Help</h1>
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

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> <Link href="/"><h1 className="font-bold text-sm  border-r-2 border-black px-2">Community</h1></Link></NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> <Link href="/"><h1 className="font-bold text-sm  border-r-2 border-black px-2">Sign In</h1></Link></NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>

     </NavigationMenu>
      </nav>
     </>
  )
}

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
