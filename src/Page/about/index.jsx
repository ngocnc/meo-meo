import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { tokens } from "../../theme";

const NoProduct = () => {
	return (
		<Box textAlign="center">
			<Typography variant="h1">
				Chưa có sản phẩm vui lòng thêm sản phẩm
			</Typography>
			<Link to="/" style={{ display: "block" }}>
				<Button variant="outlined">Tại đây</Button>
			</Link>
		</Box>
	);
};
const CartProduct = ({ products }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Grid container spacing={3} mt={1}>
			{products?.map(({ name, image }) => (
				<Grid xs={12} sm={6} md={4} lg={3} key={name}>
					<Box borderRadius={2} overflow="hidden" position="relative">
						<Box lineHeight={0} overflow="hidden">
							<img src={image} alt={name} className="avt_cat" />
						</Box>
						<Box p={3} sx={{ backgroundColor: `${colors.grey[200]}` }}>
							<Typography color={colors.grey[700]}>{name}</Typography>
						</Box>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

const About = () => {
	const { addToCart } = useContext(CartContext);
	return (
		<Container maxWidth="xl">
			{addToCart.length > 0 ? (
				<CartProduct products={addToCart} />
			) : (
				<NoProduct />
			)}
		</Container>
	);
};
export default About;
