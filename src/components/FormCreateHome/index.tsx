// styles
import * as Styled from './styles';

// types
export type FormCreateHomeProps = {
	title?: string;
};

const FormCreateHome = () => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default FormCreateHome;
