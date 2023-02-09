// template
import PrivateComponent from "../../components/PrivateComponent";
import DashboardTemplate from "../../templates/Dashboard";

export default function DashboardPage() {
	return (
		<PrivateComponent>
			<DashboardTemplate />
		</PrivateComponent>
	);
};