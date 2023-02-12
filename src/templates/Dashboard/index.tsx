// hooks
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// components
import Heading from '../../components/Heading';
import Menu from '../../components/Menu';
import Section from '../../components/Section';
import { Sections } from '../Home';

// styles
import * as Styled from './styles';

// types
export type DashboardProps = {
	sections: Sections;
};
type BtnArrSections = {
	id: string;
	icon: React.ReactNode;
}[];

// mock
import mock from "./mock";

const { sections } = mock;

const DashboardTemplate = () => {
	// states
	const { data: session } = useSession();

	const btnArray: BtnArrSections = [];

	useEffect(() => {
		console.log("dashboard was rendered")
	}, [])

	if (Object.keys(sections).length >= 1) {

		for (const prop in sections) {
			btnArray.push({
				id: sections[prop].id,
				icon: sections[prop].icon,
			});
		}
	}
	
	return (
		<Styled.Wrapper>
			<Menu />
			<Heading as="h1" size="big" color="secondary">
				Dashboard
			</Heading>
			<p>
				Bem-vindo, {!!session && session.user.name + ", "} ao painel de controle do seu portfólio!
			</p>
			<Section
				id="portfolio-sections"
			>
				<Heading as="h2" size="big" color="secondary">
					Seções do seu portfólio
				</Heading>
				<p>
					Clique nos ícones abaixo para ir às seções correspondentes.
				</p>
				<Styled.ContainerButtonsSections>
					<Styled.ListButtonsSections>

						{
							btnArray.map((btnSection, index) => (
								<li key={`${index} - ${btnSection.id}`}>
									<Link href={`/${btnSection.id === "#" ? "#" : `#${btnSection.id}`}`} passHref legacyBehavior>
										<Styled.Link target="_self" rel="internal">
											{btnSection.icon}
											<span>{btnSection.id === "#" ? "home" : btnSection.id}</span>
										</Styled.Link>
									</Link>
								</li>
							))
						}
					</Styled.ListButtonsSections>
				</Styled.ContainerButtonsSections>
			</Section>
		</Styled.Wrapper>
	);
};

export default DashboardTemplate;
