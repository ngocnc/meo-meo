import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FixHeaderProvider from "./Context";
import Router from "./router";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
	const [theme, colorMode] = useMode();
	return (
		<FixHeaderProvider>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router />
				</ThemeProvider>
			</ColorModeContext.Provider>
		</FixHeaderProvider>
	);
};
export default App;
