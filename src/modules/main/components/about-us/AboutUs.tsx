import {Paper} from "@mui/material";
import {VideoComponent} from "../../../../components/video";

import './style.scss';

export const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us__video-block">
                <h1 className="about-us__video-block-title">Про нас</h1>

                <VideoComponent cardClassName="about-us__video" src="./video.mp4"/>
            </div>

            <div className="about-us__our-direction-block">

                <h1 className="about-us-direction__title">
                    Напрямки роботи
                </h1>


                <div className="about-us__our-directions">
                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Навчальний напрямок</h2>
                        <p>
                            Ми проводимо програми, що поширюють обізнаність в темі травми на навчають надавати першу
                            психологічно-духовну допомогу.
                            <br/>
                            <br/>
                            Навчання актуальне душпасторам, соціальним працівникам, психологам, тим, хто працює з
                            соціальними групами, що переживають травму війни та тим, кому потрібна допомога.
                        </p>
                    </Paper>

                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Робота з капеланами</h2>
                        <p>
                            “Інститут Зцілення Травм” Українського Біблійного Товариства співпрацює з Службою
                            військового
                            капеланства Збройних Сил України та долучені до навчання капеланів під час підготовчої
                            програми.
                        </p>
                    </Paper>

                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Група підтримки</h2>
                        <p>
                            Ми проводимо роботу в невеликих групах по 5-8 осіб, основним правилом яких є
                            конфіденційність.
                            <br/>
                            <br/>
                            Групи направлені на роботу з дружинами та рідними діючих військовослужбовців, сімʼями
                            загиблих
                            та зниклих безвісти захисників.
                        </p>
                    </Paper>

                    <Paper className="about-us__our-direction" elevation={3}>
                        <h2>Табори</h2>
                        <p>
                            2023 року ми розпочали реалізацію трьохрічного проекту: 4 табори в рік для покращення
                            психоемоційного стану дітей військовослужбовців, зниклих безвісти та полонених захисників.
                            <br/>
                            <br/>
                            Також ми проводимо табори підтримки для дружин загиблих військовослужбовців.
                        </p>
                    </Paper>
                </div>
            </div>
        </div>
    )
};
