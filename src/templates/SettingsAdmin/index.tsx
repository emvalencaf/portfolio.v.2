// components
import Link from "next/link";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

// icons
import { Delete, Edit } from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";

// types
import { Settings } from "../../shared-types/settings";
export type SettingsAdminTemplateProps = {
	settings: Settings[];
};

const SettingsAdminTemplate = ({
	settings = [],
}: SettingsAdminTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Heading as="h1" size="big">
				Lista de Settings
			</Heading>
			<Styled.Ul>
				{settings.map((setting) => (
					<li key={setting._id}>
						<span>{setting.websiteName}</span>
						<Link
							href={`/admin/settings-edition/${setting._id}`}
							passHref
							legacyBehavior
						>
							<Styled.Link>
								<Edit />
							</Styled.Link>
						</Link>
						<Button icon={<Delete />} color="warning"></Button>
					</li>
				))}
			</Styled.Ul>
		</Styled.Wrapper>
	);
};

export default SettingsAdminTemplate;
