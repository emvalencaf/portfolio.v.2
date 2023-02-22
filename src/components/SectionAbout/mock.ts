import { SectionAboutProps } from ".";

export default {
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
				urlDownload:
					"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
			},
		],
		courses: [
			{
				title: "Curso 1",
				institution: "Faculdade Damas",
				workTime: "",
				startIn: 1,
				endIn: 2,
				urlDownload:
					"https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
			},
		],
	},
} as SectionAboutProps;
