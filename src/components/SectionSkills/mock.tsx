// icons
import { Html5, Javascript, Nodejs, Typescript, ReactLogo, Git, Mongodb, Css3 } from "@styled-icons/boxicons-logos";
// types
import { SectionSkillsProps } from ".";

export default {
	id: "#skills",
	techs: [
		{
			techName: "JavaScript",
			icon: <Javascript />,
			techDescription: `
				Uso JavaScript no dia à dia para desenvolver tanto o front-end quanto o back-end (por meio do NodeJS) dos projetos.
			`,
			showTechDescription: false,
		},
		{
			techName: "NodeJS",
			icon: <Nodejs />,
			techDescription: `
				Uso o NodeJS para desenvolver o back-end das minhas aplicações.
			`,
			showTechDescription: false,
		},
		{
			techName: "TypeScript",
			icon: <Typescript />,
			techDescription: `
				Uso o TypeScript para auxiliar o desenvolvimento de projetos mais complexos adicionando tipagem estática aos meus projetos javascript - tanto no back-end quanto no front-end
			`,
			showTechDescription: false,
		},
		{
			techName: "CSS",
			icon: <Css3 />,
			techDescription: `
				Uso o CSS3 para desenvolver os estilos dos meu projetos
			`,
			showTechDescription: false,
		},
		{
			techName: "HTML",
			icon: <Html5 />,
			techDescription: `
				Uso o HTML5 para desenvolver a estrutura dos meus projetos no front-end
			`,
			showTechDescription: false,
		},
		{
			techName: "ReactJS",
			icon: <ReactLogo />,
			techDescription: `
				Uso o ReactJS para tornar mais escaláveis meus projetos, por meio da componentização de trechos de códigos reutilizávies.
			`,
			showTechDescription: false,
		},
		{
			techName: "Git",
			icon: <Git />,
			techDescription: `
				Uso o Git para versionar meus projetos tornando-os mais fáceis de gerenciar e compartilhar.
			`,
			showTechDescription: false,
		},
		{
			techName: "MongoDB",
			icon: <Mongodb />,
			techDescription: `
				Uso o MongoDB como banco de dado não-relacional para o back-end das minhas aplicações.
			`,
			showTechDescription: false,
		},
	]
} as SectionSkillsProps;