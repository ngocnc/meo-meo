import { Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FixHeader } from "../../Context";
import { tokens } from "../../theme";

const Navbar = ({ path, title, icon }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const fixHeader = useContext(FixHeader);
	return (
		<Typography mx={3}>
			<NavLink to={path}>
				<Typography
					variant="span"
					sx={{
						color: `${fixHeader ? colors.grey[900] : colors.grey[300]}`,
					}}
					display="flex"
					alignItems="center">
					<Typography mr={1} variant="span">
						{icon}
					</Typography>
					<Typography variant="span">{title}</Typography>
				</Typography>
			</NavLink>
		</Typography>
	);
};
export default Navbar;
