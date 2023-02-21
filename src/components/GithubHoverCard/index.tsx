// react
import { useFetch } from '../../hooks/useFetch';

// components
import Heading from '../Heading';

// styles
import * as Styled from "./styles";


const GithubHoverCard = () => {

	const [data, status, error] = useFetch(`https://api.github.com/users/emvalencaf`);

	if (status === "idle") return;

	if (status === "error") return;

	if (status === "loading") return <p>Carregando...</p>

	if(status === "success") return (
		<Styled.Wrapper>
			<Heading as="h2" size="huge" color="primary">
				Repositórios Públicos
			</Heading>
			<Heading as="h3" size="huge" color="secondary">
				{data && data?.public_repos}
			</Heading>
		</Styled.Wrapper>
	);
};

export default GithubHoverCard;
