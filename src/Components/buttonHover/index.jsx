import { Button, Typography } from "@mui/material";
// FIXME: fix from two case to one case
const ButtonHover = ({ title, colors, handleClick }) => (
	<Button
		sx={{
			"&:hover": {
				color: `${colors.grey[200]}`,
				backgroundColor: `${colors.redAccent[700]}`,
			},
			backgroundColor: `${colors.redAccent[600]}`,
			color: `${colors.grey[200]}`,
			px: "16px",
			py: "12px",
			borderRadius: "99px",
			my: "4px",
		}}
		onClick={handleClick}>
		<Typography> {title}</Typography>
	</Button>
);

export default ButtonHover;
