// components
import PrivateComponent from "../../components/PrivateComponent";

// template
import DashboardTemplate, { DashboardProps } from "../../templates/Dashboard";

// type
import { GetServerSideProps } from "next";

// utils
import { privateServerSideProps } from "../../utils/private-serverside-props";
import PortfolioController from "../../api/controller/portfolio";
import { Session } from "next-auth";
import {
	BiosData,
	EducationData,
	Tech,
	WorkData,
} from "../../shared-types/section";
import { Project } from "../../shared-types/project";

type CbProps = {
	props: {
		session: Session;
		sections: {
			_id?: string;
			title: string;
			children?: string;
			background?: boolean;
			icon?: "home" | "about" | "skills" | "projects" | "other";
			color?:
				| "primary"
				| "secondary"
				| "tertiary"
				| "quaternary"
				| "quinary"
				| "senary";
			backgroundImg?: string;
			owner?: string;
			techs?: Tech[];
			ocupation?: string;
			mainStack?: string[];
			biosData?: BiosData;
			workData?: WorkData;
			educationData?: EducationData;
			projects?: Project[];
			urlDownload?: string;
		}[];
	};
	notFound?: boolean;
};

export default function DashboardPage({ sections = [] }: DashboardProps) {
	return (
		<PrivateComponent>
			<DashboardTemplate sections={sections} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const cb = async (session: Session) => {
		const response = await PortfolioController.get();

		if (!response)
			return {
				props: null,
				notFound: true,
			};

		const { portfolio } = response;

		const { sections } = portfolio.content;
		return {
			props: {
				session,
				sections,
			},
			notFound: false,
		};
	};

	return privateServerSideProps<CbProps>(ctx, cb);
};
