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
				link: "#",
				newTab: false,
			},
			{
				children: "sobre",
				link: "#about",
				newTab: false,
			},
			{
				children: "habilidades",
				link: "#skills",
				newTab: false,
			},
			{
				children: "projetos",
				link: "#projects",
				newTab: false,
			},
			{
				children: "curriculo",
				link: "#curriculum",
				newTab: false,
			}
		],
	},
	main: {
		sections: {
			home: {
				id: "#",
				ownerName: "Tício da Silva",
				ocupation: "fullstack developer jr.",
				mainStack: [
					"javascript",
					"typescript",
					"nodjs",
					"c#"
				]
			},
			about: {
				id: "#about",
				profilePhoto: {
					srcImg:"/imagem.jpg",
					altText:"profileImage",
				},
				bios: `
				<p>
					Olá mundo
				</p>
				`,
			}
		},
		sideBar: {
			githubURL:"https://www.github.com/tício",

		},
	}
} as HomeProps;
