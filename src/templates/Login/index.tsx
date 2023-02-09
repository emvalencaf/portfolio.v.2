// hooks
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

// components
import FormLogin from '../../components/FormLogin';
import Heading from '../../components/Heading';

// styles
import * as Styled from './styles';


const LoginTemplate = () => {
	const router = useRouter();
	// states
	const [ error, setError ] = useState("");
	const [ loginIn, setLoginIn ] = useState(false);

	// handleLogin
	const handleLogin = async (username: string, password: string) => {

		if (!username || !password) {
			setError("Usuário ou senha não preenchidos corretamente");
			return null;
		}

		const redirect = router.query?.redirect || "/";

		const response = await signIn("credentials", {
			username,
			password,
			redirect: false,
			callbackUrl: redirect as string,
		});

		if (!response.ok) {
			setError("Usuário ou senha inválidos");
			return null;
		}

		window.location.href = response.url;

	};

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
