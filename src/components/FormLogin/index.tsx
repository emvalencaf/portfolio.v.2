// hooks
import { useState } from 'react';

// components
import TextInput from '../TextInput';
import Button from '../Button';

// icons
import { Login, Password, Person3, Timer } from '@styled-icons/material-outlined';

// styles
import * as Styled from './styles';

// types
export type FormLoginProps = {
	errorMessage?: string;
	handleLogin?: (username: string, password: string) => void;
};

const FormLogin = ({
		errorMessage = "",
		handleLogin,
	}: FormLoginProps) => {
		// states
		const [ username, setUsername ] = useState("");
		const [ password, setPassword ] = useState("");
		const [ loading, setLoading ] = useState(false);

		// synthetic event handler
		const handleSubmit = async (event: React.FormEvent) => {

			event.preventDefault();
			setLoading(true);

			if (handleLogin) await handleLogin(username, password);

			setLoading(false);

		};

	return (
		<Styled.Form onSubmit={handleSubmit}>
			<TextInput
				type="text"
				name="user-identifier"
				label="email ou username"
				onInputChange={(v) => setUsername(v)}
				value={username}
				icon={<Person3 />}
			/>
			<TextInput
				type="password"
				name="user-password"
				label="senha"
				onInputChange={(v) => setPassword(v)}
				value={password}
				icon={<Password />}
			/>

			{!!errorMessage && (
				<Styled.ErrorMessage>
					{errorMessage}
				</Styled.ErrorMessage>
			)}

			<Styled.ButtonWrapper>
				<Button
					disabled={loading}
					icon={loading?
							<Timer />
							: <Login />
					}
				>
					{loading? "Aguarde..." : "Entrar"}
				</Button>
			</Styled.ButtonWrapper>

		</Styled.Form>
	);
};

export default FormLogin;
