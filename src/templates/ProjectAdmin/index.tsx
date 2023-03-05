// components
import Button from "../../components/Button";

// styles
import * as Styled from "./styles";

// types
import { Project } from "../../shared-types/project";
import { Delete, Edit } from "@styled-icons/material-outlined";
import Heading from "../../components/Heading";
import Link from "next/link";
import { Eyeem } from "@styled-icons/simple-icons";
export type ProjectAdminTemplateProps = {
	projects: Project[];
};

const ProjectAdminTemplate = ({ projects = [] }: ProjectAdminTemplateProps) => {
	console.log(projects);
	return (
		<Styled.Wrapper>
			<Heading as="h1" size="big">
				Lista de Projetos
			</Heading>
			<Styled.Ul>
				{projects.map((project) => (
					<li key={project._id}>
						<span>{project.title}</span>
						<Link
							href={`/projects/${project._id}`}
							passHref
							legacyBehavior
						>
							<Styled.Link>
								<Eyeem />
							</Styled.Link>
						</Link>
						<Link
							href={`/admin/project-edition/${project._id}`}
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

export default ProjectAdminTemplate;
