// components
import PrivateComponent from "../../components/PrivateComponent";

// template
import DashboardTemplate from "../../templates/Dashboard";

// type
import { GetServerSideProps } from "next";

// utils
import { privateServerSideProps } from "../../utils/private-serverside-props";

export default function DashboardPage() {
	return (
		<PrivateComponent>
			<DashboardTemplate />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
