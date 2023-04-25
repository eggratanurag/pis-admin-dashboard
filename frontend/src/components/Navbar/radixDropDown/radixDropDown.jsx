import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {Drop1Routes,Drop2Routes, Drop3Routes } from "../NavigationRoutes";
import { HashLink } from "react-router-hash-link";
import "./radixDropDown.css";
import { Link, useLocation } from "react-router-dom";

const radixNavigationMenu = () => {
  let location = useLocation().pathname;
  return (
    <NavigationMenu.Root className='NavigationMenuRoot'>
      <NavigationMenu.List className='NavigationMenuList'>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='NavigationMenuTrigger'>
          <span 
            className={classNames(
            location.slice(0, 12) === '/information'
            ? " text-[#6c64f8]"
            : "text-gray-800 hover:text-[#6c64f8]",
            
            )}
            >
            Information 
            </span>
             <CaretDownIcon className='CaretDown' aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='NavigationMenuContent'>
            <ul className='List one'>

              {Drop1Routes().filter(item => item.href).map(item => (

                   <Link
                   key={item.name}
                   title='About us'
                   className='ListItemLink'
                   to={item.href}
                   >
                   <span 
                   className={classNames(
                   item.current
                   ? " text-[#6c64f8]"
                   : "text-gray-800 hover:text-[#6c64f8]",
                   "ListItemHeading",
                   )}
                   >{item.name}</span>
                  <span className='ListItemText'>{item.description}</span>
                 </Link>
               
              ))}
               {Drop1Routes().filter(item => item.section).map(item => (
                   
                   <HashLink
                   key={item.name}
                   title='About us'
                   className='ListItemLink'
                   to={item.section}
                   >
                 <span  className= "ListItemHeading" >{item.name}</span>
                 <span className='ListItemText'>{item.description}</span>
               
                 </HashLink>
               
              ))}
            
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='NavigationMenuTrigger'>
          <span 
            className={classNames(
            location.slice(0, 10) === '/academics'
            ? " text-[#6c64f8]"
            : "text-gray-800 hover:text-[#6c64f8]",
            
            )}
            >
            Academics 
            </span>
             <CaretDownIcon className='CaretDown' aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='NavigationMenuContent'>
            <ul className='List one'>
               {Drop2Routes().filter(item => item.href).map(item => (

                   <Link
                   key={item.name}
                   title='academics'
                   className='ListItemLink'
                   to={item.href}
                   >
                   <span 
                   className={classNames(
                   item.current
                   ? " text-[#6c64f8]"
                   : "text-gray-800 hover:text-[#6c64f8]",
                   "ListItemHeading",
                   )}
                   >{item.name}</span>
                   <span className='ListItemText'>{item.description}</span>
                 </Link>
               
              ))}
               {Drop2Routes().filter(item => item.section).map(item => (
                   
                   <HashLink
                   key={item.name}
                   title='About us'
                   className='ListItemLink'
                   to={item.section}
                   >
                 <span  className= "ListItemHeading" >{item.name}</span>
                 <span className='ListItemText'>{item.description}</span>
               
                 </HashLink>
               
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className='NavigationMenuTrigger'>
            <span 
            className={classNames(
            location.slice(0, 6) === '/about'
            ? " text-[#6c64f8]"
            : "text-gray-800 hover:text-[#6c64f8]",
            
            )}
            >
            About 
            </span>
            <CaretDownIcon className='CaretDown' aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className='NavigationMenuContent'>
            <ul className='List one'>
              {Drop3Routes().filter(item => item.href).map(item => (

                   <Link
                   key={item.name}
                   title='About us'
                   className='ListItemLink'
                   to={item.href}
                   >
                   <span 
                   className={classNames(
                   item.current
                   ? " text-[#6c64f8]"
                   : "text-gray-800 hover:text-[#6c64f8]",
                   "ListItemHeading",
                   )}
                   >{item.name}</span>
                 <span className='ListItemText'>{item.description}</span>
                 </Link>
               
              ))}
              {Drop3Routes().filter(item => item.section).map(item => (
                   
                   <HashLink
                   key={item.name}
                   title='About us'
                   className='ListItemLink'
                   to={item.section}
                   >
                   <span  className= "ListItemHeading" >{item.name}</span>
                 <span className='ListItemText'>{item.description}</span>
               
                 </HashLink>
               
              ))}
           
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className='NavigationMenuIndicator'>
          <div className='Arrow' />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className='ViewportPosition'>
        <NavigationMenu.Viewport className='NavigationMenuViewport' />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className='ListItemHeading'>{title}</div>
          <p className='ListItemText'>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ),
);

export default radixNavigationMenu;
