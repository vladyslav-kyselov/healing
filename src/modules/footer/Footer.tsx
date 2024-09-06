import Box from "@mui/material/Box";

import './style.scss';


export const Footer = () => {
    return (
        <Box id="contacts">
            <div className="footer">
                <Box className="footer__logo-info">
                    <img src="../../../public/logo.png" alt="" className="footer-logo"/>

                    <p className="">© 2024 All Rights Reserved</p>
                </Box>

                <Box sx={{display: {xs: 'none', sm: 'block'}}} className="footer__refs">
                    <div><a className="footer__links" href="#aboutUs">Про нас</a></div>
                    <div><a className="footer__links" href="#programs">Програми</a></div>
                    <div><a className="footer__links" href="#methods">Методи роботи</a></div>
                    <div><a className="footer__links" href="#gallery">Галерея</a></div>
                    <div><a className="footer__links" href="#contacts">Контакти</a></div>
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
                                src="../../../public/fb.svg"
                                alt="facebook link"
                                className="icon inst"
                                width={12}
                                height={22}
                            /></a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img
                                src="../../../public/inst.svg"
                                alt="instagram link"
                                className="icon inst"
                                width={22}
                                height={22}
                            />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                            <img
                                src="../../../public/youtube.svg"
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
