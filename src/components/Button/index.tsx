// styles
import * as Styled from './styles';

// types
import { ButtonHTMLAttributes } from 'react';
export type ButtonProps = {
	icon?: React.ReactNode;
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	color?: "primary" | "secondary"
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	children,
	disabled = false,
	color = "primary",
	onClick,
	icon,
}: ButtonProps) => {
	const handleClick = () => {
		if (onClick) onClick();

	};

	return (
		<Styled.Button
			disabled={disabled}
			color={color}
			onClick={handleClick}
		>
			{icon}
			<Styled.ButtonLabel>
				{children}
			</Styled.ButtonLabel>
		</Styled.Button>
	);
};

export default Button;
