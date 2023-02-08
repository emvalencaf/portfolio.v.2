// icons
import { Css3, Git, Html5, Javascript, Mongodb, Nodejs, ReactLogo, Typescript } from "@styled-icons/boxicons-logos";
import { Cases, Code, Home, Person3, Portrait } from "@styled-icons/material-outlined";

// type
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
				icon: <Home />,
				newTab: false,
			},
			{
				children: "sobre",
				link: "#about",
				icon: <Person3 />,
				newTab: false,
			},
			{
				children: "habilidades",
				icon: <Code />,
				link: "#skills",
				newTab: false,
			},
			{
				children: "projetos",
				icon: <Cases />,
				link: "#projects",
				newTab: false,
			},
			{
				children: "curriculo",
				icon: <Portrait />,
				link: "#curriculo",
				newTab: false,
			}
		]
	},
	main: {
		sections: {
			home: {
				id: "#",
				ownerName: "Tício de Souza e Silva",
				ocupation: "Desenvolvedor WEB Júnior",
				mainStack: [
					"Javascript",
					"NodeJS",
					"React",
				],
			},
			about: {
				id: "#about",
				biosData: {
					bios: `
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem minus dolore ducimus quos, sed dolores odit maiores quam tempora atque deserunt voluptas perferendis, aspernatur, sequi dignissimos reiciendis. In, esse!
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non a deleniti quia. Magnam aspernatur cumque, nemo vero libero excepturi consequuntur corporis ullam nobis molestiae? Atque nam praesentium ullam quaerat quisquam?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque recusandae libero sequi, tempora iste, illo, possimus unde cum numquam quae corrupti minima tenetur mollitia earum repellendus animi molestiae voluptates.
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati dolores fugiat ipsam ut odit sed aliquid ducimus molestiae vero ipsa nam veniam dolor libero labore qui pariatur, alias assumenda itaque?
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cum temporibus nesciunt sequi odit ipsam harum magnam dolore a molestiae. Totam debitis, rerum aliquid sit non ratione. Et, omnis iusto!
						</p>

					`,
					profilePhoto: {
						altText: "Profile potrait",
						srcImg: "assets/images/potrait-photo.jpg",
					},
				},
				urlDownload: "./assets/files/curriculum.pdf",
				workData: {
					workExperience: [
						{
							employer: "Google Inc.",
							ocupation: "Frontend Developer",
							startIn: 19212,
							jobDescription: `
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
							`,
							showData: false,
						},
						{
							employer: "Google Inc.",
							ocupation: "Frontend Developer",
							startIn: 19212,
							jobDescription: `
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
							`,
							showData: false,
						},
						{
							employer: "Google Inc.",
							ocupation: "Frontend Developer",
							startIn: 19212,
							jobDescription: `
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
							`,
							showData: false,
						},
						{
							employer: "Google Inc.",
							ocupation: "Frontend Developer",
							startIn: 19212,
							jobDescription: `
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
							`,
							showData: false,
						},
					],
				},
				educationData: {
					higherEducation: [
						{
							title: "Curso 1",
							institution: "Faculdade Damas",
							workTime: "",
							startIn: 1,
							endIn: 2,
							urlDownload: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
						},
					],
					courses: [
						{
							title: "Curso 1",
							institution: "Faculdade Damas",
							workTime: "",
							startIn: 1,
							endIn: 2,
							urlDownload: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
						},
					],
				}
			},
			skills: {
				id: "skills",
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
			},
			projects: {
				id: "projects",
				projects: [
					{
						title: "projeto 1",
						urlDemo: "http://localhost:3233",
						urlRepository: "http://localhost:434343"
					},
					{
						title: "projeto 2",
						urlDemo: "http://localhost:3233",
						urlRepository: "http://localhost:434343"
					},
					{
						title: "projeto 3",
						urlDemo: "http://localhost:3233",
						urlRepository: "http://localhost:434343"
					}
				]
			},
		},
		sideBar: {
			githubURL: "http://www.github.com/",
			linkedinURL: "http://www.linkedin.com/in/"
		},
	}
} as HomeProps;
