import AutoScriptImg from "./images/AutoScript.png";
import FoodguiderImg from "./images/Foodguider.png";
import HoteliqImg from "./images/Hoteliq.png";
import RevergImg from "./images/Reverg.png";
import SharkbiteImg from "./images/Sharkbite.png";
import instacart from "./images/instacart.png";
import netbeast from "./images/netbeast.png";
import BugermogulImg from "./images/Burgermogul.png";
import PlanelyImg from "./images/Planely.png";
import travelica from "./images/travelica.png";

const projectData = [
  {
    id: 1,
    name: "AutoScript",
    image: AutoScriptImg,
    location: "Lyon",
    type: "Web Application",
    description:
      "AutoScript is a  bringing in a new way to measure tire wear with the aid of web development",
    industry: "Automotive",
    technologies: ["React", "JavaScript", "Express", "Node.js", "MySQL"],
    team: {
      Manager: "Tom Cruise",
      ScrumMaster: "Jane Doe",
      TechLead: "Mark zuckerberg",
      WebDeveloper: "",
      JuniorDeveloper: "Bill Gates",
      DevOps: "Steve Carrell",
    },
    contact: "AutoScript@mail.com",
    resources: "",
    employeeviews: 10,
    requestaccess: "Unavailable",
    status: 20,
  },
  {
    id: 2,
    name: "Foodguider",
    image: FoodguiderImg,
    location: "Munich",
    type: "Web Application",
    description:
      "An app helping you to find the best food places near your location",
    industry: "Gastronomy",
    technologies: ["React", "JavaScript", "Express", "Node.js", "MongoDB"],
    team: {
      Manager: "Thomas Mueller",
      ScrumMaster: "Claudia Roth",
      TechLead: "Gordon Ramsay",
      WebDeveloper: "Shaun Pelling",
      JuniorDeveloper: "Emma Stone",
      DevOps: "Hugh Laurie",
    },
    contact: "Foodguider@mail.com",
    resources: "",
    employeeviews: "8",
    requestaccess: "Available",
    status: 40,
  },
  {
    id: 3,
    name: "Hoteliq",
    image: HoteliqImg,
    location: "Paris",
    type: "Web Application",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
    industry: "Hospitality",
    technologies: ["JavaScript", "React", "MUI", "Node.js", "MySQL"],
    team: {
      Manager: "Peter White",
      ScrumMaster: "John Smith",
      TechLead: "Maria Styles",
      WebDeveloper: "Liam Huff",
      JuniorDeveloper: "Mario Mendez",
      DevOps: "Luis Baker",
    },
    contact: "Hoteliq@mail.com",
    resources: "",
    employeeviews: 12,
    requestaccess: "Available",
    status: 80,
  },
  {
    id: 4,
    name: "Reverg",
    image: RevergImg,
    location: "Nantes",
    type: "Online store",
    description:
      "Building an online store for plate artworks. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    industry: "Web development",
    technologies: ["React", "JavaScript", "Express", "Node.js", "MongoDB"],
    team: {
      Manager: "Lydia Cortez",
      ScrumMaster: "Bob Ross",
      TechLead: "Jonathan Brown",
      WebDeveloper: "Anais Dufour",
      JuniorDeveloper: "Kelly Smith",
      DevOps: "Sebastian Haller",
    },
    contact: "reverg@mail.com",
    resources: "",
    employeeviews: 101,
    requestaccess: "Available",
    status: 60,
  },
  {
    id: 5,
    name: "Instacart",
    image: instacart,
    location: "Montpeller",
    type: "Online store",
    description:
      "Groceries and home essentials delivered from local stores in 1 hour",
    industry: "Food",
    technologies: ["Python", "Ruby", "Rails", "Firebase", "PostSQL"],
    team: {
      Manager: "Jamie Oliver",
      ScrumMaster: "Bob Ross",
      TechLead: "Jonathan Brown",
      WebDeveloper: "Anais Dufour",
      JuniorDeveloper: "Kelly Smith",
      DevOps: "Sebastian Haller",
    },
    contact: "instacart@mail.com",
    resources: "",
    employeeviews: 200,
    requestaccess: "unavailable",
    status: 50,
  },
  {
    id: 6,
    name: "Netbeast",
    image: netbeast,
    location: "Munich",
    type: "ECommerce",
    description: "The Smart Home connector",
    industry: "ECommerce",
    technologies: ["Node.js", "React", "MongoDB", "Bootstrap", "NGINX"],
    team: {
      Manager: "Ryan Oslo",
      ScrumMaster: "Bob Ross",
      TechLead: "Jonathan Brown",
      WebDeveloper: "Anais Dufour",
      JuniorDeveloper: "Kelly Smith",
      DevOps: "Sebastian Haller",
    },
    contact: "instacart@mail.com",
    resources: "",
    employeeviews: 200,
    requestaccess: "unavailable",
    status: 50,
  },
  {
    id: 7,
    name: "Sharkbite",
    image: SharkbiteImg,
    location: "St Dizier",
    type: "Start-up",
    description:
      "Small scale communal fishing aided by online software and data. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    industry: "Agricultural",
    technologies: ["React", "JavaScript", "Node.js", "MySQL"],
    team: {
      Manager: "Gandalf (the White)",
      ScrumMaster: "Aragon",
      TechLead: "Legolas",
      WebDeveloper: "Shelob",
      JuniorDeveloper: "Frodo Bagins",
      DevOps: "Sauron",
    },
    contact: "sharkbiteadmin@mail.com",
    resources: "",
    employeeviews: 141,
    requestaccess: "Available",
    status: 80,
  },
  {
    id: 8,
    name: "Burgermogul",
    image: BugermogulImg,
    location: "New York",
    type: "Chain",
    description:
      "Mid-level fastfood chain. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    industry: "Entertainment",
    technologies: ["React", "JavaScript", "Node.js", "MySQL", "Java"],
    team: {
      Manager: "Bob Becher",
      ScrumMaster: "Linda Belcher",
      TechLead: "Tina Belcher",
      WebDeveloper: "Gene Belcher",
      JuniorDeveloper: "Louise Belcher",
      DevOps: "",
    },
    contact: "bobsbugers@mail.com",
    resources: "",
    employeeviews: 33,
    requestaccess: "Available",
    status: 90,
  },
  {
    id: 9,
    name: "Planely",
    image: PlanelyImg,
    location: "Dublin",
    type: "Airline",
    description:
      "Budget airline operating in western Europe. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    industry: "Entertainment",
    technologies: ["React", "JavaScript", "Node.js", "MySQL"],
    team: {
      Manager: "Maverick",
      ScrumMaster: "Goose",
      TechLead: "Charlie",
      WebDeveloper: "Viper",
      JuniorDeveloper: "Iceman",
      DevOps: "Merlin",
    },
    contact: "topgun@mail.com",
    resources: "",
    employeeviews: 38,
    requestaccess: "Available",
    status: 50,
  },
  {
    id: 10,
    name: "Travelica",
    image: travelica,
    location: "Casablanca",
    type: "Web Application",
    description:
      "Discover the world with us! Wherever you want to go, we will go with you, making sure to provide an unforgettable experience tailored to you expectations.",
    industry: "Travel",
    technologies: ["Angular", "C++", "Java", "Sass"],
    team: {
      Manager: "Indiana Jones",
      ScrumMaster: "Conan the Barbarian",
      TechLead: "Lara Croft",
      WebDeveloper: "David Bowie",
      JuniorDeveloper: "Amber Heard",
      DevOps: "Johnny Depp",
    },
    contact: "traveltheworld.com",
    resources: "",
    employeeviews: 22,
    requestaccess: "Available",
    status: 60,
  },
];

export default projectData;
