import { Typography, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { tokens } from "../../theme";

const Navbar = ({ path, title, icon }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Typography mx={3}>
			<NavLink to={path} style={{ color: `${colors.grey[300]}` }}>
				<Typography mr={1} variant="span">
					{icon}
				</Typography>
				<Typography variant="span">{title}</Typography>
			</NavLink>
		</Typography>
	);
};
export default Navbar;
