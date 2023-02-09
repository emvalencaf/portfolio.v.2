// next
import { AppProps } from "next/app";

// auth
import { SessionProvider } from "next-auth/react";

// styles
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<GlobalStyles />
			</ThemeProvider>
		</SessionProvider>
	);
}
