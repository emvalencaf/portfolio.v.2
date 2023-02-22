// icons
import {
	Home,
	Person3,
	Code,
	Cases,
	Portrait,
} from "@styled-icons/material-outlined";
// types
import { MenuProps } from ".";

export default {
	menuLinks: [
		{
			children: "home",
			link: "#",
			icon: <Home />,
			newTab: false,
		},
		{
			children: "sobre",
			link: "#sobre",
			icon: <Person3 />,
			newTab: false,
		},
		{
			children: "habilidades",
			icon: <Code />,
			link: "#habilidades",
			newTab: false,
		},
		{
			children: "projetos",
			icon: <Cases />,
			link: "#projetos",
			newTab: false,
		},
		{
			children: "curriculo",
			icon: <Portrait />,
			link: "#curriculo",
			newTab: false,
		},
	],
} as MenuProps;
