import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import Navbar from "../menubar";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const listsmenu = [
	{
		id: 1,
		title: "Home",
		icon: <HomeOutlinedIcon />,
		path: "/",
	},
	{
		id: 2,
		title: "About",
		icon: <InfoOutlinedIcon />,
		path: "about",
	},
];

const Header = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar>
					<Avatar
						src="https://cdn.chotot.com/admincentre/6.0%20M%C3%A8o%20Munchkin.png"
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
					/>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton size="large" onClick={handleOpenNavMenu}>
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{listsmenu?.map((menu) => (
								<MenuItem key={menu.id} onClick={handleCloseNavMenu}>
									<Navbar {...menu} />
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						color={colors.grey[300]}
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flex: 1,
							fontFamily: "monospace",
						}}>
						<Button>
							<Link to="/" style={{ color: `${colors.grey[300]}` }}>
								Mèo meo
							</Link>
						</Button>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{listsmenu?.map((menu) => (
							<Navbar key={menu.id} {...menu} />
						))}
					</Box>
					<IconButton
						onClick={colorMode.toggleColorMode}
						sx={{ margin: "0 16px" }}>
						{theme.palette.mode === "dark" ? (
							<LightModeOutlinedIcon sx={{ color: `${colors.grey[300]}` }} />
						) : (
							<DarkModeOutlinedIcon sx={{ color: `${colors.grey[300]}` }} />
						)}
					</IconButton>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<PersonOutlinedIcon sx={{ color: `${colors.grey[300]}` }} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{settings?.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;
