import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {useState} from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import './styles.scss';

const drawerWidth = 240;

const NAV_ITEMS = [{
    title: 'Головна',
    id: 'general'
}, {
    title: 'Про нас',
    id: 'aboutUs'
}, {
    title: 'Програми',
    id: 'programs'
}, {
    title: 'Методи роботи',
    id: 'methods'
}, {
    title: 'Галерея',
    id: 'gallery'
}, {
    title: 'Контакти',
    id: 'contacts'
}];

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <img src="../../../public/logo.png" alt="logo" width={50} height={50}/>
            <Divider/>
            <List>
                {NAV_ITEMS.map(({id, title}) => (
                    <a key={title} href={`#${id}`} className="header__refs_link">
                        <ListItem key={title} disablePadding>
                            <ListItemButton sx={{textAlign: 'center'}}>

                                <ListItemText primary={title}/>
                            </ListItemButton>
                    </ListItem>
                    </a>
                ))}
            </List>
            <p className="all-rights">© 2024 All Rights Reserved</p>
        </Box>
    );

    return (
        <>
            <AppBar component="nav" className="header">
                <Toolbar className="header__toolbar">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{flexGrow: 0.2, display: {xs: 'none', sm: 'block'}}} className="header__logo">
                        <img src="../../../public/logo.png" alt="logo" width={50} height={50}/>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}} className="header__refs">
                        {NAV_ITEMS.map(({title, id}) => (
                            <Button key={title} className="header__refs_button">
                                <a href={`#${id}`} className="header__refs_link">
                                    <span className={`header__refs_title`}>{title}</span>
                                </a>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={window !== undefined ? window.document.body : undefined}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Toolbar sx={{height: {sm: 81, xs: 56}}}/>
        </>
    )
};
