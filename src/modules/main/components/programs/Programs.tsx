import {Button, Divider, Paper} from "@mui/material";

import './style.scss';

export const Programs = () => {
    return (
        <div className="programs">
            <div className="our-programs">
                <h1 className="our-programs__title">Наші програми</h1>

                <div className="our-programs__items">
                    <Paper className="our-programs__item">
                        <h2 className="our-programs__item-title">
                            Що це за програма?
                        </h2>
                        <p>
                            «Зцілення душевних ран» – унікальна міжнародна програма, яка розроблена Інститутом Зцілення
                            Травм (Trauma Healing Institute) та впроваджена в більш ніж 100 країнах світу (проводиться
                            на
                            120 мовах). Програма створена для надання допомоги людям, які мають фізичні, емоційні або
                            душевні травми, що викликані різноманітними причинами.
                        </p>
                    </Paper>

                    <Paper className="our-programs__item">
                        <h2 className="our-programs__item-title">
                            Чим вона унікальна?
                        </h2>
                        <p>
                            Ми пропонуємо унікальну програму, яка побудована на основі ефективних методик в роботі з
                            травмою на фізичному, емоційному та духовному рівнях. Вона поєднує в собі наукові підходи
                            базової психології з глибинними біблійними принципами духовного розвитку людини, що сприяє
                            повноцінному та глибокому зціленню від травм. Програма надає людині незамінні інструменти,
                            які допоможуть їй впоратися з кризовими ситуаціями в майбутньому, а також навчить допомагати
                            іншим.
                        </p>
                    </Paper>

                    <Paper className="our-programs__item">
                        <h2 className="our-programs__item-title">
                            Цільова аудиторія
                        </h2>
                        <p>
                            Програма «Зцілення душевних ран» створена для того, щоб допомогти людям, які пережили
                            травмуючий досвід. На основі біблійних принципів та психологічних підходів ми навчаємо
                            людей, як надати необхідну допомогу людям, що мають фізичні, емоційні чи душевні травми. В
                            період війни, з 2016 року, важливим напрямком для нас є робота з військовими капеланами та
                            сімʼями військовослужбовців.
                        </p>
                    </Paper>
                </div>
            </div>

            <div className="our-programs__types-of-program">
                <h1 className="our-programs__title">Різновиди програм</h1>

                <div className="our-programs__program">
                    <img src="/public/1.jpg" alt="" className="our-programs__program_img"/>

                    <div className="our-programs__info our-programs__info_odd">
                        <h2 className="our-programs__info-title">Класична програма</h2>
                        <p>
                            Це основна програма, яка підходить та використовується в більшості сферах служіння. Її
                            можна з легкістю адаптувати до будь-якої цільової та вікової аудиторії. Цей курс є
                            основою будь-якого іншого різновиду програм Інституту Зцілення Душевних Ран.
                        </p>
                        <Divider sx={{display: {md: 'none'}}} style={{width: '100%'}}/>
                    </div>
                </div>

                <div className="our-programs__program">
                    <div className="our-programs__info programs__info_even">
                        <h2 className="our-programs__info-title">Дитяча програма</h2>
                        <p>
                            Дитяча програма в Україні стартувала в 2021 році. Дитяча програма розроблена для 9-13 річних
                            дітей, які пережили на своєму короткому життєвому шляху різного роду душевні травми. Виклики
                            цієї програми полягають не лише в тому, щоб отримати внутрішнє зцілення, але й допомогти
                            дитині розібратися в своїх душевних ранах. Виявити дитячі рани нелегко, тому задля цього
                            використовується багато методів таких як ігрова форма подачі матеріалу, елементи арт
                            терапії, елементи рольової гри, а також групової терапії.
                        </p>
                        <Divider sx={{display: {md: 'none'}}} style={{width: '100%'}}/>
                    </div>

                    <img src="/public/2.jpg" alt="" className="our-programs__program_img"/>
                </div>

                <div className="our-programs__program">
                    <img src="/public/3.jpg" alt="" className="our-programs__program_img"/>

                    <div className="our-programs__info programs__info_odd">
                        <h2 className="our-programs__info-title">Долаючи лихо</h2>
                        <p>
                            Цей посібник розроблений таким чином, щоб людина мала змогу пропрацювати його самостійно або
                            в групі з іншими учасниками. Вона є унікальною відповіддю на постійні лиха, без яких
                            неможливе людське життя.
                        </p>

                        {/*/public/book.pdf*/}
                        <a href="#" target="_blank">
                            <Button variant="outlined" className="our-programs__info-download-btn">
                                Завантажити книгу
                            </Button>
                        </a>
                        <Divider sx={{display: {md: 'none'}}} style={{width: '100%'}}/>
                    </div>
                </div>

                <div className="our-programs__program">
                    <div className="our-programs__info programs__info_even">
                        <h2 className="our-programs__info-title">Програма для військових капеланів</h2>
                        <p>
                            Військова програма має мету забезпечити необхідними інструментами та знаннями військових
                            капеланів, які працюють як з військовими, так і з сім’ями постраждалих та загиблих воїнів.
                            Особливим аспектом служителів у цій сфері є те, що їм доводиться працювати з однією з
                            найглибших травм – це моральна травма. Тому під час проходження цієї програми – головна
                            увага приділяється саме моральній травмі.
                        </p>
                        <Divider sx={{display: {md: 'none'}}} style={{width: '100%'}}/>
                    </div>

                    <img src="/public/4.jpg" alt="" className="our-programs__program_img"/>
                </div>

                <div className="our-programs__program">
                    <div className="our-programs__info programs__info_odd">
                        <img src="/public/5.jpg" alt="" className="our-programs__program_img"/>
                        <h2 className="our-programs__info-title">Жіноча програма</h2>
                        <p>
                            Ця програма розроблена з метою допомогти жінкам на шляху глибшого самопізнання. Серед тем,
                            які обговорюються під час програми: самосприйняття, емоції та робота з ними, комплекси та
                            упередження, особисі кордони та цілісність у Христі.
                        </p>
                        <Divider sx={{display: {md: 'none'}}} style={{width: '100%', marginBottom: 20}}/>
                    </div>
                    <div className="our-programs__info programs__info_odd">
                        <img src="/public/6.jpg" alt="" className="our-programs__program_img"/>
                        <h2 className="our-programs__info-title">Сила в слабкості</h2>
                        <p>
                            Це окремий курс, що складається з 9 уроків. В цій програмі піднімаються важкі та глибокі
                            теми взаємовідносин між людьми. Іноді ми ходимо по колу, не маючи можливості щось змінити.
                            Тому, іноді нам потрібно розібратись в таких складних темах, для того щоб скласти алгоритм
                            взаємодії з іншими людьми.
                        </p>
                        <Divider sx={{display: {md: 'none'}}} style={{width: '100%', marginBottom: 20}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
