import './style.scss';
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {AccordionComponent} from "../../../../components/accordion";
import {Divider} from "@mui/material";



export const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-cards">
                <title className="gallery-cards__title">Галерея</title>

                <Box sx={{display: {xs: 'none', sm: 'block'}}} className="gallery-cards__photos">
                    <div className="gallery-cards-photos__block1">
                        <div className="gallery-cards-photos__block1_1">
                            <img src="/public/4.jpg" alt="Фото" className="gallery-cards-photos__block1_1-photo1"/>
                            <img src="/public/2.jpg" alt="Фото" className="gallery-cards-photos__block1_1-photo2"/>
                        </div>

                        <div className="gallery-cards-photos__block1_2">
                            <img src="/public/g3.jpg" alt="Фото" className="gallery-cards-photos__block1_2-photo1"/>
                        </div>
                    </div>

                    <div className="gallery-cards-photos__block2">
                        <img src="/public/g4.jpg" alt="Фото" className="gallery-cards-photos__block2_photo1"/>
                        <img src="/public/n1.jpg" alt="Фото" className="gallery-cards-photos__block2_photo2"/>
                    </div>

                    <div className="gallery-cards-photos__block3">
                        <div className="gallery-cards-photos__block3_1">
                            <img src="/public/g3.1.jpg" alt="Фото"
                                 className="gallery-cards-photos__block3_1-photo1"/>
                            <img src="/public/IMG_4344.webp" alt="Фото"
                                 className="gallery-cards-photos__block3_1-photo2"/>
                            <img src="/public/g3.3.jpg" alt="Фото"
                                 className="gallery-cards-photos__block3_1-photo3"/>
                        </div>

                        <div className="gallery-cards-photos__block3_2">
                            <img src="/public/bser.jpg" alt="Фото"
                                 className="gallery-cards-photos__block3_2-photo1"/>
                            <img src="/public/3.jpg" alt="Фото" className="gallery-cards-photos__block3_2-photo2"/>
                        </div>
                    </div>

                    <div className="gallery-cards-photos__block4">
                        <div className="gallery-cards-photos__block4_1">
                            <img src="/public/g4.1.jpg" alt="Фото"
                                 className="gallery-cards-photos__block4_1-photo1"/>
                        </div>

                        <div className="gallery-cards-photos__block4_2">
                            <img src="/public/g4.2.jpg" alt="Фото"
                                 className="gallery-cards-photos__block4_2-photo1"/>
                            <img src="/public/g4.3.jpg" alt="Фото"
                                 className="gallery-cards-photos__block4_2-photo2"/>
                        </div>
                    </div>
                </Box>

                <Box sx={{display: {xs: 'block', sm: 'none'}}} className="gallery-cards__photos">
                    <Carousel
                        dynamicHeight={false}
                        showArrows={false}
                    >
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/4.jpg" alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/g4.jpg" alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/n1.jpg" alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/g3.1.jpg" alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/IMG_4344.webp" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/g3.3.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/bser.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/3.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/g4.1.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/g4.2.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="/public/g4.3.jpg" alt="Фото"/>
                        </div>
                    </Carousel>
                    <Divider sx={{display: {md: 'none'}}} style={{width: '100%'}}/>
                </Box>
            </div>

            <div className="questions-and-answers">
                <h1 className="questions-and-answers__title">Питання та відповіді</h1>
                <AccordionComponent className="questions-and-answers__accordion"/>
            </div>
        </div>
    )
};
