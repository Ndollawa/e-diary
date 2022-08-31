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
  icon: string;
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
      title: "Dropdown 1",
      type: "dropdown",
      url: "",
      icon: "",
      isActive: false,
      isOpen:false,
      subMenu:[
        {
          id:3,
        title: "Dropdown 2",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:4,
        title: "Dropdown 3",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:5,
        title: "Dropdown 4",
        type: "link",
        url:"",
        icon:""
      } ] 

    },
    {
      id:6,
      title: "Dropdown 2",
      type: "dropdown",
      url: "",
      icon: "",
      isActive: false,
      isOpen:false,
      subMenu:[
        {
        id:7,
        title: "Dropdown 2",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:8,
        title: "Dropdown 3",
        type: "link",
        url:"",
        icon:""
      },
      {
        id:9,
        title: "Dropdown 4",
        type: "link",
        url:"",
        icon:""
      } ] 

    },
    {
        id:10,
        title: "Dropdown 2",
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