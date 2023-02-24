// hooks
import { useEffect, useState } from "react";

// icons
import { Cases, Home, Person3, Code } from "@styled-icons/material-outlined";
import {
	Html5,
	Java,
	Javascript,
	Mongodb,
	Nodejs,
	Php,
	Python,
	ReactLogo,
	Typescript,
} from "@styled-icons/boxicons-logos";
import { Cplusplus, Csharp, Css3, Mysql } from "@styled-icons/simple-icons";

// map-data
const iconData = {
	home: <Home />,
	about: <Person3 />,
	skills: <Code />,
	projects: <Cases />,
	javascript: <Javascript />,
	nodejs: <Nodejs />,
	reactjs: <ReactLogo />,
	mongodb: <Mongodb />,
	mysql: <Mysql />,
	typescript: <Typescript />,
	html5: <Html5 />,
	css3: <Css3 />,
	python: <Python />,
	java: <Java />,
	cplus: <Cplusplus />,
	csharp: <Csharp />,
	php: <Php />,
};

// it will recieved an icon string and will return a icon in ReactNode.
export const useGetIcon = (icon: string) => {
	const [nodeIcon, setNodeIcon] = useState<React.ReactNode | null>(null);

	// effect
	useEffect(() => {
		setNodeIcon(iconData[icon]);

		return () => setNodeIcon(null);
	}, [icon]);

	return { nodeIcon };
};
