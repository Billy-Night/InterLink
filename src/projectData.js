
// import AutoScripImg from '../public/images/AutoScripImg.png';

// import RevergImg from './Reverg';
// import Foodguider from "./Foodguider";
// import Hoteliq from './Hoteliq';

const projectData = [
  {
    id: 1,
    name: "AutoScript",
    // image: AutoScripImg,
    location: "Lyon",
    type: "Web Application",
    description: "AutoScript is a  bringing in a new way to measure tire wear with the aid of web development",
    industry: "Automotive",
    technologies: [
      "React",
      "JavaScript",
      "Express",
      "Node.js",
      "MySQL",
    ],
    team: {
        Manager: "Tom Cruise",
        ScrumMaster: "Jane Doe",
        TechLead: "Mark zuckerberg",
        WebDeveloper: "Elon Musk",
        JuniorDeveloper: "Bill Gates",
        DevOps: "Steve Carrell",
    },
    resources: "",
    employeeviews: 10,
    requestaccess: "Unavailable"
},
{
    id: 2,
    name: "Foodguider",
    // image: Foodguider,
    location: "Berlin",
    type: "Web Application",
    description:
      "An app helping you to find the best food places near your location",
    industry: "Gastronomy",
    technologies: [
      "React",
      "JavaScript",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    team: {
      Manager: "Thomas Mueller",
      ScrumMaster: "Claudia Roth",
      TechLead: "Gordon Ramsay",
      WebDeveloper: "Shaun Pelling",
      JuniorDeveloper: "Emma Stone",
      DevOps: "Hugh Laurie",
    },
    resources: "",
    employeeviews: "8",
    requestaccess: "Available",
  },
  	{
		id: 3,
		name: 'Hoteliq',
		// image: Hoteliq,
		location: 'Paris',
		type: 'Web Application',
		description:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
		industry: 'Hospitality',
		technologies: [ 'JavaScript', 'React', 'MUI', 'Node.js', 'MySQL' ],
		team: {
			Manager: 'Peter White',
			ScrumMaster: 'John Smith',
			TechLead: 'Maria Styles',
			WebDeveloper: 'Liam Huff',
			JuniorDeveloper: 'Mario Mendez',
			DevOps: 'Luis Baker'
		},
		resources: '',
		employeeviews: 12,
		requestaccess: ''
	},
  {
    id: 4,
    name: "LinoScape",
    // image: RevergImg,
    location: "Nantes",
    type: "Online store",
    description: "Building an online store for plate artworks",
    industry: "Web development",
    technologies:  [
        "React", "JavaScript", "Express", "Node.js", "MongoDB" 
    ],
    team: {
        Manager: "Lydia Cortez",
        ScrumMaster: "Bob Ross",
        TechLead: "Jonathan Brown",
        WebDeveloper: "Anais Dufour",
        JuniorDeveloper: "Kelly Smith",
        DevOps: "Sebastian Haller",
    },
    resources: "",
    employeeviews: "101",
    requestaccess: "Available"
},
];

export default projectData;