// hooks
import { Cases, Code, Home, Person3 } from "@styled-icons/material-outlined";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

// components
import Heading from "../../components/Heading";
import Menu from "../../components/Menu";
import Section from "../../components/Section";
import { PortfolioContent } from "../../shared-types/portfolio";
import { Session } from "../../shared-types/session-nextauth";

// styles
import * as Styled from "./styles";

// types
export type DashboardProps = Pick<PortfolioContent, "sections">;
type BtnArrSections = {
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

	/*
	if (Object.keys(sections).length >= 1) {
		for (const prop in sections) {
			btnArray.push({
				id: sections[prop]._id,
				icon: sections[prop].icon,
			});
		}
	}*/

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
		</Styled.Wrapper>
	);
};

export default DashboardTemplate;
