import { SectionAboutProps } from ".";

export default {
	id: "#about",
	bios: {
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
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dicta aut cum sequi voluptatibus. Vel pariatur veritatis quidem. Culpa vero deleniti minima earum quod, odit deserunt fugit reprehenderit architecto in!
			</p>
		`,
		profilePhoto: {
			altText: "Profile potrait",
			srcImg: "assets/images/potrait-photo.jpg",
		},
	},
	urlDownload: "./assets/files/curriculum.pdf",
	workExperiences: {
		workExperiences: [
			{
				employer: "Google Inc.",
				ocupation: "Frontend Developer",
				jobDescription: `
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
				`,
				showData: true,
			},
		]
	},
	academicData: [
		{
			courseTitle: "Curso de React.Js e Next.Js (Intermediário e Avançado)",
			institution: "Udemy, Instrutor: Luiz Otávio Miranda",
			courseWork: "93 horas",
			startIn: 2932983,
			endIn: 3932983,
			urlDownload: "/assets/files/UC-44225967-b7ec-4add-8983-426364ad7bb6.pdf"
		},
		{
			courseTitle: "Curso de React.Js e Next.Js (Intermediário e Avançado)",
			institution: "Udemy, Instrutor: Luiz Otávio Miranda",
			courseWork: "93 horas",
			startIn: 2932983,
			endIn: 3932983,
			urlDownload: "/assets/files/UC-44225967-b7ec-4add-8983-426364ad7bb6.pdf"
		},
		{
			courseTitle: "Curso de React.Js e Next.Js (Intermediário e Avançado)",
			institution: "Udemy, Instrutor: Luiz Otávio Miranda",
			courseWork: "93 horas",
			startIn: 2932983,
			endIn: 3932983,
			urlDownload: "/assets/files/UC-44225967-b7ec-4add-8983-426364ad7bb6.pdf"
		}
	]
} as SectionAboutProps;