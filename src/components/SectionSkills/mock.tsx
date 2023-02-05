// icons
import { Html5, Javascript, Nodejs, Typescript, ReactLogo, Git } from "@styled-icons/boxicons-logos";
import { Css } from "@styled-icons/material-outlined";
// types
import { SectionSkillsProps } from ".";

export default {
	id: "#skills",
	techs: [
		{
			techName: "JavaScript",
			icon: <Javascript />,
		},
		{
			techName: "NodeJS",
			icon: <Nodejs />,
		},
		{
			techName: "TypeScript",
			icon: <Typescript />,
		},
		{
			techName: "CSS",
			icon: <Css />,
		},
		{
			techName: "HTML",
			icon: <Html5 />,
		},
		{
			techName: "ReactJS",
			icon: <ReactLogo />,
		},
		{
			techName: "Git",
			icon: <Git />,
		}
	]
} as SectionSkillsProps;