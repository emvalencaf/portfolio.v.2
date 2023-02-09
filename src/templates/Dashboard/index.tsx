// styles
import * as Styled from './styles';

// types
export type DashboardProps = {
	title?: string;
};

const DashboardTemplate = ({ title = "olá" }: DashboardProps) => {
	return (
		<Styled.Wrapper>
			<h1>
				{title}
			</h1>
		</Styled.Wrapper>
	);
};

export default DashboardTemplate;
