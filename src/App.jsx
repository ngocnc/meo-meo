import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Router from "./router";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
export default App;
