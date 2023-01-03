import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CartContext from "./Context/CartContext";
import FixHeaderProvider from "./Context/HeaderContext";
import Router from "./router";
import { ColorModeContext, useMode } from "./theme";

const App = () => {
	const [theme, colorMode] = useMode();
	return (
		<FixHeaderProvider>
			<ColorModeContext.Provider value={colorMode}>
				<CartContext>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Router />
						<CartContext />
					</ThemeProvider>
				</CartContext>
			</ColorModeContext.Provider>
		</FixHeaderProvider>
	);
};
export default App;
