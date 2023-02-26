// next
import { AppProps } from "next/app";

// auth
import { SessionProvider } from "next-auth/react";

// styles
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/global-styles";

// utils
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider theme={theme}>
				<NextNProgress
					color={theme.colors.tertiary}
					startPosition={0.3}
					stopDelayMs={200}
					height={10}
				/>
				<Component {...pageProps} />
				<GlobalStyles />
			</ThemeProvider>
		</SessionProvider>
	);
}
