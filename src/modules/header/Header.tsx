import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import {useState} from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import './styles.scss';

type Props = {
    refs: { [key: string]: React.RefObject<HTMLDivElement | null> }
};

const drawerWidth = 240;

const REF_TITLES = {
    GENERAL: 'Головна',
    ABOUT_US: 'Про нас',
    PROGRAMS: 'Програми',
    WORK_METHODS: 'Методи роботи',
    GALLERY: 'Галерея',
    CONTACTS: 'Контакти'
};
export const Header = (Props: Props) => {
    const {refs, window} = Props;
    const {generalRef, aboutUsRef, programRef, methodsRef, galleryRef, contactsRef} = refs;

    // const [activeHeaderRef, setActiveHeaderRef] = useState<string>(REF_TITLES.GENERAL);

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const navItems = [
        {title: REF_TITLES.GENERAL, ref: generalRef},
        {title: REF_TITLES.ABOUT_US, ref: aboutUsRef},
        {title: REF_TITLES.PROGRAMS, ref: programRef},
        {title: REF_TITLES.WORK_METHODS, ref: methodsRef},
        {title: REF_TITLES.GALLERY, ref: galleryRef},
        {title: REF_TITLES.CONTACTS, ref: contactsRef}
    ];

    const onHeaderButtonClick = ({ref}) => {
        // setActiveHeaderRef(title);
        ref.current.scrollIntoView({behavior: 'smooth'});
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <img src="/public/logo.png" alt="logo" width={50} height={50}/>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}} onClick={() => onHeaderButtonClick(item)}>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <p className="all-rights">© 2024 All Rights Reserved</p>
        </Box>
    );


    // const getActiveRefClass = title => title === activeHeaderRef ? 'active-ref' : '';

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
                        <img src="/public/logo.png" alt="logo" width={50} height={50}/>
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}} className="header__refs">
                        {navItems.map(({title, ref}) => (
                            <Button key={title} className="header__refs_button"
                                    onClick={() => onHeaderButtonClick({title, ref})}>
                                <span className={`header__refs_title`}>{title}</span>
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
