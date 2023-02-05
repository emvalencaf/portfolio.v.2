// types
import { WorkExperienceContainerProps } from ".";

export default {
	workExperiences: [
		{
			employer: "Google Inc.",
			ocupation: "Frontend Developer",
			jobDescription: `
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
			`,
			showData: false,
			startIn: 30019223,
			endIn: 32919223,
		},
		{
			employer: "Facebook Inc.",
			ocupation: "Frontend Developer",
			jobDescription: `
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
			`,
			showData: false,
			startIn: new Date("05/05/2020").getMilliseconds(),
			endIn: 12919223,
		},
		{
			employer: "Twitter Inc.",
			ocupation: "Frontend Developer",
			jobDescription: `
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita pariatur voluptate ipsum. Eveniet blanditiis tempora rerum fugiat eos modi aspernatur, quas inventore magnam ratione a est sapiente dicta aperiam? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non ducimus alias modi quod cum natus optio quisquam fugit nesciunt vel, repellendus, quia sit nihil necessitatibus iste consectetur! Laborum, dicta?
			`,
			showData: false,
			startIn: 19019223,
			endIn: 20919223,
		},
	],
} as WorkExperienceContainerProps;
