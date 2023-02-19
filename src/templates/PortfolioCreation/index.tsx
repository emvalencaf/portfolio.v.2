// hooks
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// components
import Link from 'next/link';
import Header from '../../components/Header';
import Heading from '../../components/Heading';




// styles
import { Session } from '../../shared-types/session-nextauth';
import * as Styled from './styles';



const PortfolioCreationTemplate = () => {

	// session
	const { data } = useSession();
	const session: Session = data;

	// states
		// for headear effect
	const [lastScrollYCoords, setLastScrollYCoords] = useState<number>(0);
	const [visibleHeader, setVisibleHeader] = useState<boolean>(true);

	// effects
		// showing header
	useEffect(() => {

		const handleHiddenHeader = () => {
			lastScrollYCoords < window.scrollY ?
				setVisibleHeader(false) :
				setVisibleHeader(true);

			setLastScrollYCoords(window.scrollY);
		};

		window.addEventListener("scroll", handleHiddenHeader);

		return () => {
			window.removeEventListener("scroll", handleHiddenHeader);
		};

	}, [lastScrollYCoords]);

	return (
		<Styled.Wrapper>
			<Header menuLinks={[]} logo={{
				altText: "dashboard",
				link: "/admin/"
			}} visible={visibleHeader} />
			<Styled.ContainerContent>
				<Heading
					as="h1"
					size="big"
					color="quaternary"
					uppercase
				>
					Portfolio
				</Heading>
				<Styled.ContainerParagraph>

					<p>
						Bem-vindo à seção para criar o seu portfólio.
					</p>
					<p>
						Para criar o seu portfólio você precisa primeiro configurar o seu portfólio, informando:
						<ol>
							<li>nome do site</li>
							<li>logo (com imagem ou sem imagem)</li>
							<li>url das suas redes sociais</li>
						</ol>
					</p>
					<p>
						Configurado o seu portfólio, você poderar começar a criar as seções:
						<ol>
							<li>home: uma vitrine que informa seu nome, principal(is) stacks e ocupações</li>
							<li>about: breve introdução sobre você, sua trajetória acadêmica e profissional</li>
							<li>skills: informe as tecnologias que você trabalha e informe para que usa elas</li>
							<li>projects: vincule os portfólios que você quer mostrar</li>
						</ol>
					</p>
				</Styled.ContainerParagraph>
				<Styled.ContainerButtons>
					<Link href="/admin/portfolio-creation/section-creation" passHref legacyBehavior>
						<a rel="internal">
							crie uma nova seção
						</a>
					</Link>
					<Link href="/admin/portfolio-creation/settings-creation" passHref legacyBehavior>
						<a rel="internal">
							configure o seu portfólio
						</a>
					</Link>
				</Styled.ContainerButtons>
			</Styled.ContainerContent>
		</Styled.Wrapper>
	);
};

export default PortfolioCreationTemplate;
