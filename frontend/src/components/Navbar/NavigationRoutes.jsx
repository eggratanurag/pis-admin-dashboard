import { Link, useLocation } from "react-router-dom";

function BasicRoutes() {
  let location = useLocation().pathname;
  const navObject = [
    { name: "Home", href: "/", current: location === "/" ? true : false },
    {
      name: "Contact",
      href: "/contact",
      current: location == "/contact" ? true : false,
    },
    {
      name: "Infrastructure",
      href: "/infrastructure",
      current: location == "/infrastructure" ? true : false,
    },
  ];
  return navObject;
}
function Drop1Routes() {
  let location = useLocation().pathname;

  const navObject = [
    {
      name: "Mandatory Public Disclosure",
      description: "all the documented and general information about the school",
      href: "/information/mandatory-public-disclosure",
    },
    {
      name: "Transport",
      description: "transport facility and information",
      section: "/information/mandatory-public-disclosure#transport",
    
    },
    {
      name: "Medium and curriculum",
      description: "medium of the education and curriculum",
      section: "/information/mandatory-public-disclosure#medium",
     
    },
    {
      name: "Career",
      description: "want to apply for the role of teacher?",
      href: "/information/career",
      current: location === "/information/career" ? true : false,
    },

  ];
  return navObject;
}

function Drop2Routes() {
  let location = useLocation().pathname;

  const navObject = [
    {
      name: "Fee Structure",
      description: "fee structure of the current session of all classes",
      href: "/academics/fee-structure",
      current: location === "/academics/fee-structure" ? true : false,
    },
    {
      name: "Booklist",
      description: "list of books of all the classes",
      href: "/academics/booklist",
      current: location === "/academics/booklist" ? true : false,
    },
    {
      name: "School Uniform",
      description: "uniform and other accessories for students",
      section: "/academics/information#school-uniform",
    
    },
    {
      name: "Activities",
      description: "extra curricular activities for students",
      section: "/academics/information",
    
    },
    {
      name: "Rules",
      description: " general rules and regulations for the students of the school",
      section: "/academics/information#rules",
      
    },
   
  ];
  return navObject;
}

function Drop3Routes() {
  let location = useLocation().pathname;
 
  const navObject = [
    {
      name: "About us",
      description: "About us and about our work culture",
      href: "/about/about-us",
      current: location === "/about/about-us" ? true : false,
    },
    {
      name: "Staff Information",
      description: "all the required information about the school staff",
      href: "/about/staff-information",
      current: location === "/about/staff-information" ? true : false,
    },
    {
      name: "Chairman's Message",
      description: "Vision and Ideas of the chairman",
      section: "/about/about-us#chairman-message",
    },
    {
      name: "Principal's Message",
      description: "Vision and Ideas of the Principal",
      section: "/about/about-us#principal-message",
     
    },
 
  ];
  return navObject;
}

export { BasicRoutes, Drop1Routes, Drop2Routes, Drop3Routes };
