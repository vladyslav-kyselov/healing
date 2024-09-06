import * as React from "react";

import './style.scss';
import Box from "@mui/material/Box";


type Props = {
    refs: {
        generalRef: React.RefObject<HTMLDivElement | null>,
        aboutUsRef: React.RefObject<HTMLDivElement | null>
        programRef: React.RefObject<HTMLDivElement | null>
        methodsRef: React.RefObject<HTMLDivElement | null>
        galleryRef: React.RefObject<HTMLDivElement | null>
        contactsRef: React.RefObject<HTMLDivElement | null>
    }
};

export const Footer = ({refs}: Props) => {

    const onRefClick = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <Box ref={refs.contactsRef}>
            <div className="footer">
                <Box sx={{display: {xs: 'none !important', sm: 'block'}}} className="footer__logo-info">
                    <img src="/public/logo.png" alt="" className="footer-logo"/>

                    <p className="">© 2024 All Rights Reserved</p>
                </Box>

                <Box sx={{display: {xs: 'none', sm: 'block'}}} className="footer__refs">
                    <div><a onClick={() => onRefClick(refs.aboutUsRef)}>Про нас</a></div>
                    <div><a onClick={() => onRefClick(refs.programRef)}>Програми</a></div>
                    <div><a onClick={() => onRefClick(refs.methodsRef)}>Методи роботи</a></div>
                    <div><a onClick={() => onRefClick(refs.galleryRef)}>Галерея</a></div>
                    <div><a onClick={() => onRefClick(refs.contactsRef)}>Контакти</a></div>
                </Box>

                <div className="footer__address">
                    <h2>Офіс</h2>
                    <p>Просп. Берестейський 114/2</p>
                </div>

                <div className="footer__contacts">
                    <h2>Контакти</h2>
                    <p><a href="mailto:traumahealinguh@gmail.com">traumahealinguh@gmail.com</a></p>

                    <div className="footer__contacts_social">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img
                                src="/public/fb.svg"
                                alt="facebook link"
                                className="icon inst"
                                width={12}
                                height={22}
                            /></a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img
                                src="/public/inst.svg"
                                alt="instagram link"
                                className="icon inst"
                                width={22}
                                height={22}
                            />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                            <img
                                src="/public/youtube.svg"
                                alt="youtube link"
                                className="icon inst"
                                width={31}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Box>
    );
};
