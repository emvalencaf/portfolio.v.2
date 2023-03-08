// components
import Link from "next/link";
import Heading from "../../components/Heading";
import Button from "../../components/Button";

// icons
import { Delete, Edit } from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";

// types
import { FetchResponseSections } from "../../shared-types/section";
export type SectionAdminTemplateProps = Pick<FetchResponseSections, "sections">;

const SectionAdminTemplate = ({ sections }: SectionAdminTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Heading as="h1" size="big">
				Lista de Section
			</Heading>
			<Styled.Ul>
				{sections.map((section) => (
					<li key={section._id}>
						<span>{section.title}</span>
						<Link
							href={`/admin/sections-edition/${section._id}`}
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

export default SectionAdminTemplate;
