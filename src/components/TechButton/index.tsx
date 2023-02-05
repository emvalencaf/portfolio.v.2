// styles
import { ButtonHTMLAttributes, MouseEventHandler, useState } from 'react';
import Button from '../Button';
import * as Styled from './styles';

// types
export type TechButtonProps = {
	techName: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	showTechDescription?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;;

const TechButton = ({ techName, icon, onClick, showTechDescription = false }: TechButtonProps) => {

	// handle synthetic events
	const handleClick = () => {
		if (onClick) onClick();
	};

	return (
		<Styled.Wrapper>
			<Button onClick={handleClick} icon={!!icon && icon} disabled={showTechDescription}>
				{techName}
			</Button>
		</Styled.Wrapper>
	);
};

export default TechButton;
