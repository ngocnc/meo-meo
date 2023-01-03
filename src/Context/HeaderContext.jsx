import { createContext, useEffect, useState } from "react";

export const FixHeader = createContext();

const FixHeaderProvider = ({ children }) => {
	const [checkHeight, setCheckHeight] = useState(false);
	const setFixed = () => {
		if (window.scrollY > 45) {
			setCheckHeight(true);
		} else {
			setCheckHeight(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", setFixed);
		return () => window.removeEventListener("scroll", setFixed);
	}, [checkHeight]);
	return (
		<FixHeader.Provider value={checkHeight}>{children}</FixHeader.Provider>
	);
};
export default FixHeaderProvider;
