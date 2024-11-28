import './style.scss';
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {AccordionComponent} from "../../../../components/accordion";
import {Divider} from "@mui/material";

const GALLERY_PHOTOS = [
    {
        src: './зала-min.jpg',
        alt: 'Фото'
    }, {
        src: './2.new-min.jpg',
        alt: 'Фото'
    }, {
        src: './g3-min.jpg',
        alt: 'Фото'
    }, {
        src: './g4-min.jpg',
        alt: 'Фото'
    }, {
        src: './n1-min.jpg',
        alt: 'Фото'
    }, {
        src: './g3.1-min.jpg',
        alt: 'Фото'
    }, {
        src: './IMG_4344.webp',
        alt: 'Фото'
    }, {
        src: './g3.3-min.jpg',
        alt: 'Фото'
    }, {
        src: './bser-min.jpg',
        alt: 'Фото'
    }, {
        src: './капелан-min.jpg',
        alt: 'Фото'
    }, {
        src: './g4.1-min.jpg',
        alt: 'Фото'
    }, {
        src: './g4.2-min.jpg',
        alt: 'Фото'
    }, {
        src: './g4.3-min.jpg',
        alt: 'Фото'
    }
];

export const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-cards">
                <title className="gallery-cards__title">Галерея</title>

                <Box sx={{display: {xs: 'none', sm: 'block'}}} className="gallery-cards__photos">
                    <div className="gallery-cards-photos__block1">
                        <div className="gallery-cards-photos__block1_1">
                            <img src={GALLERY_PHOTOS[0].src} alt={GALLERY_PHOTOS[0].alt} className="gallery-cards-photos__block1_1-photo1"/>
                            <img src={GALLERY_PHOTOS[1].src} alt={GALLERY_PHOTOS[1].alt} className="gallery-cards-photos__block1_1-photo2"/>
                        </div>

                        <div className="gallery-cards-photos__block1_2">
                            <img src={GALLERY_PHOTOS[2].src} alt={GALLERY_PHOTOS[2].alt} className="gallery-cards-photos__block1_2-photo1"/>
                        </div>
                    </div>

                    <div className="gallery-cards-photos__block2">
                        <img src={GALLERY_PHOTOS[3].src} alt={GALLERY_PHOTOS[3].alt} className="gallery-cards-photos__block2_photo1"/>
                        <img src={GALLERY_PHOTOS[4].src} alt={GALLERY_PHOTOS[4].alt} className="gallery-cards-photos__block2_photo2"/>
                    </div>

                    <div className="gallery-cards-photos__block3">
                        <div className="gallery-cards-photos__block3_1">
                            <img src={GALLERY_PHOTOS[5].src} alt={GALLERY_PHOTOS[5].alt}
                                 className="gallery-cards-photos__block3_1-photo1"/>
                            <img src={GALLERY_PHOTOS[6].src} alt={GALLERY_PHOTOS[6].alt}
                                 className="gallery-cards-photos__block3_1-photo2"/>
                            <img src={GALLERY_PHOTOS[7].src} alt={GALLERY_PHOTOS[7].alt}
                                 className="gallery-cards-photos__block3_1-photo3"/>
                        </div>

                        <div className="gallery-cards-photos__block3_2">
                            <img src={GALLERY_PHOTOS[8].src} alt={GALLERY_PHOTOS[8].alt}
                                 className="gallery-cards-photos__block3_2-photo1"/>
                            <img src={GALLERY_PHOTOS[9].src} alt={GALLERY_PHOTOS[9].alt} className="gallery-cards-photos__block3_2-photo2"/>
                        </div>
                    </div>

                    <div className="gallery-cards-photos__block4">
                        <div className="gallery-cards-photos__block4_1">
                            <img src={GALLERY_PHOTOS[10].src} alt={GALLERY_PHOTOS[10].alt}
                                 className="gallery-cards-photos__block4_1-photo1"/>
                        </div>

                        <div className="gallery-cards-photos__block4_2">
                            <img src={GALLERY_PHOTOS[11].src} alt={GALLERY_PHOTOS[10].alt}
                                 className="gallery-cards-photos__block4_2-photo1"/>
                            <img src={GALLERY_PHOTOS[12].src} alt={GALLERY_PHOTOS[12].alt}
                                 className="gallery-cards-photos__block4_2-photo2"/>
                        </div>
                    </div>
                </Box>

                <Box sx={{display: {xs: 'block', md: 'none'}}} className="gallery-cards__photos">
                    <Carousel
                        dynamicHeight={false}
                        showArrows={false}
                    >
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src={GALLERY_PHOTOS[0].src} alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./g4-min.jpg" alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./n1-min.jpg" alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./g3.1-min.jpg" alt="Фото"/>
                        </div>

                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./IMG_4344.webp" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./g3.3-min.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./bser-min.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src={GALLERY_PHOTOS[9].src} alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./g4.1-min.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./g4.2-min.jpg" alt="Фото"/>
                        </div>
                        <div className="gallery-cards__photo-wrapper-mobile">
                            <img src="./g4.3-min.jpg" alt="Фото"/>
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
