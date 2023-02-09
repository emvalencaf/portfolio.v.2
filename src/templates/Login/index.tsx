// components
import FormLogin from '../../components/FormLogin';
import Heading from '../../components/Heading';

// styles
import * as Styled from './styles';


const LoginTemplate = () => {
	return (
		<Styled.Wrapper>
			<Styled.LoginHeader>
				<Heading as='h1' color="quaternary">
					Login
				</Heading>
				<p>
					Bem-vindo à área administrativa, por favor, faça o login para acessar o dashboard.
				</p>
			</Styled.LoginHeader>
			<FormLogin />
		</Styled.Wrapper>
	);
};

export default LoginTemplate;
