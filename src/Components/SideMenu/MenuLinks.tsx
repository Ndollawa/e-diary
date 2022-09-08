 import { ReactComponentElement, ReactElement } from 'react';
import {IoIosPaper} from 'react-icons/io'
import { JsxElement } from 'typescript';
 
 type Submenu = { 
    id:number;
    title: string;
    type: string;
    url: string;
    icon: string;
   }[];
 type NavLinks = {
  id: number;
  title: string;
  type: string;
  url: string;
  icon: string | JSX.Element;
  isActive: undefined | boolean | null;
  isOpen?: undefined | boolean | null;
  subMenu?:Submenu | undefined;
}[] 
     export const  MenuItems:NavLinks = [ {
        id: 1, 
        title: "Dashboard",
        type: "link",
        url:"",
        icon:"",
        isActive: true,
      },
      {
      id:2,
      title: "Post Management",
      type: "dropdown",
      url: "",
      icon: <IoIosPaper/>,
      isActive: false,
      isOpen:false,
      subMenu:[
        {
          id:3,
        title: "Create Post",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:4,
        title: "All Posts",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:5,
        title: "Recycle Bin",
        type: "link",
        url:"",
        icon:""
      }] 

    },
    {
      id:6,
      title: "User Management",
      type: "dropdown",
      url: "",
      icon: "",
      isActive: false,
      isOpen:false,
      subMenu:[
        {
        id:7,
        title: "Create User",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:8,
        title: "All Users",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:9,
        title: "Recycle Bin",
        type: "link",
        url:"",
        icon:""
      } ] 

    },
    {
        id:10,
        title: "Post Categories",
        type: "link",
        url: "",
        icon: "",
        isActive: false,
        isOpen:false
      },
      {
        id:11,
        title: "Dropdown 3",
        type: "link",
        url: "",
        icon: "",
        isActive: false,
        isOpen:false
      }]