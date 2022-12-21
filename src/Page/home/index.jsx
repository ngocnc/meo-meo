import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Home = () => {
	return (
		<Container maxWidth="xl">
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid xs={8}>xs=89999</Grid>
					<Grid xs={4}>xs=4</Grid>
					<Grid xs={4}>xs=4</Grid>
					<Grid xs={8}>xs=8</Grid>
				</Grid>
			</Box>
		</Container>
	);
};
export default Home;
