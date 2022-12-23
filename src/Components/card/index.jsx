import { Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { tokens } from "../../theme";

const Card = ({ products }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Grid container spacing={3} mt={1}>
			{products?.map((product) => (
				<Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
					<Box borderRadius={2} overflow="hidden">
						<Box lineHeight={0} overflow="hidden">
							<img src={product.image} alt={product.name} className="avt_cat" />
						</Box>
						<Box p={3} sx={{ backgroundColor: `${colors.grey[200]}` }}>
							<Typography>{product.name}</Typography>
						</Box>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};
export default Card;
