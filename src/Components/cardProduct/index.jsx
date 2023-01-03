import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { tokens } from "../../theme";
import ButtonHover from "../buttonHover";

const CardProduct = ({ image, name }) => {
	const [added, setAdded] = useState(false);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const { setAddToCart } = useContext(CartContext);
	const handleClick = async () => {
		setAdded(true);
		const newProduct = {
			name: name,
			image: image,
		};
		setAddToCart((item) => [...item, newProduct]);
	};
	return (
		<Grid
			xs={12}
			sm={6}
			md={4}
			lg={3}
			sx={{
				"&:hover .css-13u26n5": {
					transform: "translateY(0%)",
					transition: "transform .4s ease-in-out",
				},
			}}>
			<Box borderRadius={2} overflow="hidden" position="relative">
				<Box
					position="absolute"
					top="0"
					left="0"
					sx={{
						transform: "translateY(-100%)",
						backgroundColor: "rgba(0,0,0,.5)",
						height: "100%",
						width: "100%",
					}}>
					<Box
						position="absolute"
						sx={{
							transform: "translate(-50%,-50%)",
							top: "50%",
							left: "50%",
							textAlign: "center",
						}}>
						<Typography>
							<ButtonHover
								title={added ? "added" : "add to cart"}
								colors={colors}
								handleClick={handleClick}
							/>
						</Typography>
					</Box>
				</Box>
				<Box lineHeight={0} overflow="hidden">
					<img src={image} alt={name} className="avt_cat" />
				</Box>
				<Box p={3} sx={{ backgroundColor: `${colors.grey[200]}` }}>
					<Typography color={colors.grey[700]}>{name}</Typography>
				</Box>
			</Box>
		</Grid>
	);
};
export default CardProduct;
