// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import CreateProjectTemplate from "../../../templates/ProjectCreation";

// types
import { privateServerSideProps } from "../../../utils/private-serverside-props";

// utils
import { GetServerSideProps } from "next";

export default function CreateProjectPage() {
	return (
		<PrivateComponent>
			<CreateProjectTemplate />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
