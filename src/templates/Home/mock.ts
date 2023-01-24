import { HomeProps } from ".";

export default {
	header: {
		logo: {
			srcImg: "assets/images/logo.png",
			altText: "logo",
			link: "#"
		},
		menuLinks: [
			{
				children: "home",
				link: "/",
				newTab: false,
			},
			{
				children: "sobre",
				link: "/sobre",
				newTab: false,
			},
			{
				children: "habilidades",
				link: "/habilidades",
				newTab: false,
			},
			{
				children: "projetos",
				link: "/projetos",
				newTab: false,
			},
			{
				children: "curriculo",
				link: "/curriculo",
				newTab: false,
			}
		],
	},
	main: {
		sections: {

		},
		sideBar: {
			githubURL:"https://www.github.com/tício",
			
		},
	}
} as HomeProps;
