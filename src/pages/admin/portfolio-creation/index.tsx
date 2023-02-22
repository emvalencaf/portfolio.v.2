// components
import PrivateComponent from "../../../components/PrivateComponent";

// templates
import PortfolioCreationTemplate from "../../../templates/PortfolioCreation";

// types
import { GetServerSideProps } from "next/types";

// utils
import { privateServerSideProps } from "../../../utils/private-serverside-props";

export default function PortfolioCreationPage() {
	return (
		<PrivateComponent>
			<PortfolioCreationTemplate />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
