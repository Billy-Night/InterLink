import React from "react";
import AutoScripImg from './AutoScript';
import RevergImg from './Reverg';
import Foodguider from "./Foodguider";
import Hoteliq from './Hoteliq';

export const projectData = [
  {
    id: 1,
    poject_name: "AutoScript",
    progect_image: AutoScripImg,
    project_location: "Lyon",
    project_type: "Web Application",
    project_description: "AutoScript is a project bringing in a new way to measure tire wear with the aid of web development",
    project_industry: "Automotive",
    project_technologies: [
      "React",
      "JavaScript",
      "Express",
      "Node.js",
      "MySQL",
    ],
    project_team: {
        ProjectManager: "Tom Cruise",
        ScrumMaster: "Jane Doe",
        TechLead: "Mark zuckerberg",
        WebDeveloper: "Elon Musk",
        JuniorDeveloper: "Bill Gates",
        DevOps: "Steve Carrell",
    },
    project_resources: "",
    employee_views: 10,
    request_access: "Unavailable"
},
{
    id: 2,
    poject_name: "Foodguider",
    progect_image: Foodguider,
    project_location: "Berlin",
    project_type: "Web Application",
    project_description:
      "An app helping you to find the best food places near your location",
    project_industry: "Gastronomy",
    project_technologies: [
      "React",
      "JavaScript",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    project_team: {
      ProjectManager: "Thomas Mueller",
      ScrumMaster: "Claudia Roth",
      TechLead: "Gordon Ramsay",
      WebDeveloper: "Shaun Pelling",
      JuniorDeveloper: "Emma Stone",
      DevOps: "Hugh Laurie",
    },
    project_resources: "",
    employee_views: "8",
    request_access: "Available",
  },
  	{
		id: 3,
		poject_name: 'Hoteliq',
		progect_image: Hoteliq,
		project_location: 'Paris',
		project_type: 'Web Application',
		project_description:
			'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et',
		project_industry: 'Hospitality',
		project_technologies: [ 'JavaScript', 'React', 'MUI', 'Node.js', 'MySQL' ],
		project_team: {
			ProjectManager: 'Peter White',
			ScrumMaster: 'John Smith',
			TechLead: 'Maria Styles',
			WebDeveloper: 'Liam Huff',
			JuniorDeveloper: 'Mario Mendez',
			DevOps: 'Luis Baker'
		},
		project_resources: '',
		employee_views: 12,
		request_access: ''
	},
  {
    id: 4,
    poject_name: "LinoScape",
    progect_image: RevergImg,
    project_location: "Nantes",
    project_type: "Online store",
    project_description: "Building an online store for plate artworks",
    project_industry: "Web development",
    project_technologies:  [
        "React", "JavaScript", "Express", "Node.js", "MongoDB" 
    ],
    project_team: {
        ProjectManager: "Lydia Cortez",
        ScrumMaster: "Bob Ross",
        TechLead: "Jonathan Brown",
        WebDeveloper: "Anais Dufour",
        JuniorDeveloper: "Kelly Smith",
        DevOps: "Sebastian Haller",
    },
    project_resources: "",
    employee_views: "101",
    request_access: "Available"
},
];
