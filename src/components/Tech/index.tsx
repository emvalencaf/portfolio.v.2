// styles
import { useState } from 'react';
import Button from '../Button';
import * as Styled from './styles';

// types
export type TechProps = {
	techName: string;
	icon?: React.ReactNode;
	techDescription: string;
	showTechDescription?: boolean;
};

const Tech = ({ techName, icon, techDescription, showTechDescription = false }: TechProps) => {
	// states
	const [ stateShowTechDescription, setStateShowTechDescription ] = useState(showTechDescription);

	// handle synthetic events
	const handleClick = () => {
		setStateShowTechDescription((v) => !v);
	};

	return (
		<Styled.Wrapper>
			<Button onClick={handleClick}>
				{!!icon? (
					icon
				): (
					techName
				)}
			</Button>
			{ stateShowTechDescription && (
				<Styled.TechDescriptionContainer>
					{techDescription}
				</Styled.TechDescriptionContainer>
			)}
		</Styled.Wrapper>
	);
};

export default Tech;
