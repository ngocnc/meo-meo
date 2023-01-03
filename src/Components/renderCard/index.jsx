import Grid from "@mui/material/Unstable_Grid2";
import CardProduct from "../cardProduct";

const Card = ({ products }) => {
	return (
		<Grid container spacing={3} mt={1}>
			{products?.map((product) => (
				<CardProduct {...product} key={product.id} />
			))}
		</Grid>
	);
};
export default Card;
