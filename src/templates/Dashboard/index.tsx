// hooks
import {
	AdminPanelSettings,
	Cases,
	Code,
	Edit,
	Home,
	Person3,
} from "@styled-icons/material-outlined";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

// components
import Heading from "../../components/Heading";
import Menu from "../../components/Menu";
import Section from "../../components/Section";

import { Project } from "../../shared-types/project";
import {
	BiosData,
	EducationData,
	Tech,
	WorkData,
} from "../../shared-types/section";
import { Session } from "../../shared-types/session-nextauth";

// styles
import * as Styled from "./styles";

// types
export type DashboardProps = {
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
export type BtnArrSections = {
	_id: string;
	title: string;
	icon: string;
}[];
type IconData = {
	home: React.ReactNode;
	skills: React.ReactNode;
	projects: React.ReactNode;
	about: React.ReactNode;
};

// data
const iconData: IconData = {
	home: <Home />,
	skills: <Code />,
	projects: <Cases />,
	about: <Person3 />,
};

const DashboardTemplate = ({ sections = [] }: DashboardProps) => {
	// session
	const { data } = useSession();
	const session: Session = data;

	// states
	const [btnArray, setBtnArray] = useState<BtnArrSections>([]);
	console.log(sections);

	useEffect(() => {
		const arr: BtnArrSections = [];

		sections.forEach((section) =>
			arr.push({
				_id: section._id,
				title: section.title,
				icon: section.icon,
			})
		);

		setBtnArray(() => [...arr]);

		return () => setBtnArray(() => []);
	}, [sections]);

	return (
		<Styled.Wrapper>
			<Menu />
			<Heading as="h1" size="big" color="secondary">
				Dashboard
			</Heading>
			<p>
				Bem-vindo, {!!session && session.user.name + ", "} ao painel de
				controle do seu portfólio!
			</p>
			<Section id="portfolio-sections">
				<Heading as="h2" size="big" color="secondary">
					Seções do seu portfólio
				</Heading>
				<p>
					Clique nos ícones abaixo para ir às seções correspondentes.
				</p>
				<Styled.ContainerButtonsSections>
					<Styled.ListButtonsSections>
						{btnArray.map((btnSection) => (
							<li key={`${btnSection._id}`}>
								<Link
									href={`/${
										btnSection.title === "home"
											? "#"
											: `#${btnSection.title}`
									}`}
									passHref
									legacyBehavior
								>
									<Styled.Link target="_self" rel="internal">
										{!!btnSection.icon &&
											iconData[btnSection.icon]}
										<span>{btnSection.title}</span>
									</Styled.Link>
								</Link>
							</li>
						))}
					</Styled.ListButtonsSections>
				</Styled.ContainerButtonsSections>
			</Section>
			<Section id="portfolio-controllers">
				<Heading as="h2" size="big" color="secondary">
					Crie o seu portfólio
				</Heading>
				<p>
					Clique nos ícones abaixo para ir a página correspondente ao
					conteúdo que você quer editar ou criar em seu portfólio
				</p>
				<Styled.ContainerButtonsSections>
					<Styled.ListButtonsSections>
						<li>
							<Link
								href={`/admin/portfolio-creation`}
								passHref
								legacyBehavior
							>
								<Styled.Link target="_self" rel="internal">
									<Edit />
									<span>Criar portfólio</span>
								</Styled.Link>
							</Link>
						</li>
						<li>
							<Link
								href={`/admin/projects`}
								passHref
								legacyBehavior
							>
								<Styled.Link target="_self" rel="internal">
									<Cases />
									<span>Projetos</span>
								</Styled.Link>
							</Link>
						</li>
						<li>
							<Link
								href={`/admin/settings`}
								passHref
								legacyBehavior
							>
								<Styled.Link target="_self" rel="internal">
									<AdminPanelSettings />
									<span>Settings</span>
								</Styled.Link>
							</Link>
						</li>
					</Styled.ListButtonsSections>
				</Styled.ContainerButtonsSections>
			</Section>
		</Styled.Wrapper>
	);
};

export default DashboardTemplate;
