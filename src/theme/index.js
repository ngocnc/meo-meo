import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const tokens = (mode) => ({
	...(mode === "dark"
		? {
				redAccent: {
					100: "#f8dcdb",
					200: "#f1b9b7",
					300: "#e99592",
					400: "#e2726e",
					500: "#db4f4a",
					600: "#af3f3b",
					700: "#832f2c",
					800: "#58201e",
					900: "#2c100f",
				},
				grey: {
					100: "#e0e0e0",
					200: "#c2c2c2",
					300: "#a3a3a3",
					400: "#858585",
					500: "#666666",
					600: "#525252",
					700: "#3d3d3d",
					800: "#292929",
					900: "#141414",
				},
		  }
		: {
				redAccent: {
					100: "#2c100f",
					200: "#58201e",
					300: "#832f2c",
					400: "#af3f3b",
					500: "#db4f4a",
					600: "#e2726e",
					700: "#e99592",
					800: "#f1b9b7",
					900: "#f8dcdb",
				},
				grey: {
					100: "#141414",
					200: "#292929",
					300: "#3d3d3d",
					400: "#525252",
					500: "#666666",
					600: "#858585",
					700: "#a3a3a3",
					800: "#c2c2c2",
					900: "#e0e0e0",
				},
		  }),
});

// mui theme settings
export const themeSettings = (mode) => {
	const colors = tokens(mode);
	return {
		palette: {
			mode: mode,
			...(mode === "dark"
				? {
						// palette values for dark mode
						primary: {
							main: colors.grey[200],
						},
						background: {
							default: colors.grey[900],
						},
				  }
				: {
						// palette values for light mode
						primary: {
							main: colors.grey[700],
						},
						background: {
							default: "#fcfcfc",
						},
				  }),
		},
	};
};

// context for color mode
export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export const useMode = () => {
	const [mode, setMode] = useState("dark");

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
		}),
		[]
	);

	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return [theme, colorMode];
};
