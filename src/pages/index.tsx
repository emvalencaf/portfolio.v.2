// templates
import HomeTemplate from "../templates/Home";

// types
import { GetServerSideProps } from "next";

export default function Index() {
  return <HomeTemplate />;
};

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	}
}