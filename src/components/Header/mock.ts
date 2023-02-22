import { HeaderProps } from ".";

export default {
	logo: {
		srcImg: "assets/images/logo.png",
		altText: "logo",
		link: "#",
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
		},
	],
} as HeaderProps;
