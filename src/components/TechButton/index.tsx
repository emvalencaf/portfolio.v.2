// styles
import {
	Css3,
	Html5,
	Java,
	Javascript,
	Mongodb,
	Nodejs,
	ReactLogo,
	Typescript,
} from "@styled-icons/boxicons-logos";
import {
	Cplusplus,
	Csharp,
	Express,
	Jest,
	Mysql,
	Nextdotjs,
	Postman,
} from "@styled-icons/simple-icons";
import { ButtonHTMLAttributes } from "react";
import Button from "../Button";
import * as Styled from "./styles";

// types
export type TechButtonProps = {
	techName: string;
	icon?: React.ReactNode;
	onClick?: () => void;
	showTechDescription?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const techsIcon = {
	javascript: <Javascript />,
	typescript: <Typescript />,
	nodejs: <Nodejs />,
	css3: <Css3 />,
	html5: <Html5 />,
	reactjs: <ReactLogo />,
	nextjs: <Nextdotjs />,
	mongodb: <Mongodb />,
	mysql: <Mysql />,
	cplus: <Cplusplus />,
	csharp: <Csharp />,
	java: <Java />,
	expressjs: <Express />,
	jest: <Jest />,
	postman: <Postman />,
};

const TechButton = ({
	techName,
	icon,
	onClick,
	showTechDescription = false,
}: TechButtonProps) => {
	// handle synthetic events
	const handleClick = () => {
		if (onClick) onClick();
	};

	return (
		<Styled.Wrapper>
			<Button
				onClick={handleClick}
				icon={icon ? icon : techsIcon[techName.toLowerCase()]}
				disabled={showTechDescription}
			>
				{techName}
			</Button>
		</Styled.Wrapper>
	);
};

export default TechButton;
