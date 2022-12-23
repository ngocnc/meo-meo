import { Box } from "@mui/material";

const Loading = () => {
	return (
		<Box position="relative" sx={{ width: "100%", height: "100vh" }}>
			<Box
				position="absolute"
				sx={{
					"&:before": {
						content: `""`,
						position: "absolute",
						top: "10px",
						left: "10px",
						right: "10px",
						bottom: "10px",
						border: "4px solid transparent",
						borderBottom: "4px solid #e74c3c",
						borderTop: "4px solid #3ce7d8",
						animation: "animate 3s linear infinite",
						borderRadius: "50%",
					},
					"&:after": {
						content: `""`,
						position: "absolute",
						top: "24px",
						left: "24px",
						right: "24px",
						bottom: "24px",
						border: "4px solid transparent",
						borderBottom: "4px solid #39ff8d",
						borderTop: "4px solid #ff67ad",
						animation: "animate 2s linear infinite",
						borderRadius: "50%",
					},
					transform: "translate(-50%,-50%)",
					width: "200px",
					height: "200px",
					border: "4px solid transparent",
					borderBottom: "4px solid #fff958",
					borderTop: "4px solid #fff958",
					animation: "animate 2s linear infinite",
					borderRadius: "50%",
					top: `calc(50% - 100px)`,
					left: `calc(50% - 100px)`,
				}}
			/>
		</Box>
	);
};
export default Loading;
