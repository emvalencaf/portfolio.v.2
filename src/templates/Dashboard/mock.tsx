// icons
import { Cases, Code, Home, Person3 } from "@styled-icons/material-outlined";

// type
import { DashboardProps } from ".";

export default {
	sections: {
		home: {
			id: "#",
			icon: <Home />,
		},
		about: {
			id: "about",
			icon: <Person3 />,
		},
		skills: {
			id: "skills",
			icon: <Code />,
		},
		projects: {
			id: "projects",
			icon: <Cases />,
		},
	}
} as DashboardProps;