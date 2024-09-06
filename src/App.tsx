import Box from '@mui/material/Box';
import {Header} from "./modules/header";
import {Main} from "./modules/main";
import {Footer} from "./modules/footer";

import './App.scss';


export default function DrawerAppBar() {
    return (
        <Box>
            <Header/>
            <Main/>
            <Footer/>
        </Box>
    );
}
