import { Box, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Card from "../../Components/renderCard";
import { fetchProduct } from "../../fetcher";
import Loading from "../loading";

const Home = () => {
	const {
		data: products,
		isInitialLoading,
		isError,
		error,
	} = useQuery(["products"], fetchProduct);
	if (isInitialLoading) {
		return <Loading />;
	}
	if (isError) {
		return <Box textAlign="center">Error...{error.message}</Box>;
	}
	return (
		<Container maxWidth="xl">
			<Card products={products} />
		</Container>
	);
};
export default Home;
