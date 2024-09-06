import * as React from 'react';
import {useRef} from 'react';
import Box from '@mui/material/Box';
import {Header} from "./modules/header";
import {Main} from "./modules/main";
import {Footer} from "./modules/footer";

import './App.scss';


export default function DrawerAppBar() {
    const generalRef = useRef<HTMLDivElement | null>(null);
    const aboutUsRef = useRef<HTMLDivElement | null>(null);
    const programRef = useRef<HTMLDivElement | null>(null);
    const methodsRef = useRef<HTMLDivElement | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const contactsRef = useRef<HTMLDivElement | null>(null);

    const refs = {generalRef, aboutUsRef, programRef, methodsRef, galleryRef, contactsRef};
    return (
        <Box>
            <Header refs={refs}/>
            <Main refs={refs}/>
            <Footer refs={refs}/>
        </Box>
    );
}
