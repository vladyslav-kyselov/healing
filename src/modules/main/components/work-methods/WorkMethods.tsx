import {VideoComponent} from "../../../../components/video";
import {Divider} from "@mui/material";

import './style.scss';

export const WorkMethods = () => {
    return (
        <div className="work-methods">
            <div className="work-methods__info-block">
                <h1 className="work-methods__title">Методи роботи</h1>

                <div className="work-methods__items">
                    <div className="work-methods__item">
                        <img src="../../../../healing-demo/public/2.1.jpg" alt="Фото" className="work-methods__item-img"/>

                        <div className="work-methods__description">
                            <h2 className="work-methods__description-title">
                                Фасилітація
                            </h2>
                            <p>
                                Відвідуючи наші навчальні програми, ви не зустрінете лекторів, спікерів та вчителів.
                                Навчання проходить по методиці фасилітації, так як і сам курс навчання
                                готує фасилітаторів.
                                Це особа, яка керує процесом групової роботи,
                                сприяє створенню позитивної атмосфери, але не
                                диктує рішень і не виступає в ролі експерта.
                            </p>

                        </div>
                        <Divider sx={{ display: {md: 'none'} }} style={{width:'100%', marginBottom: 20}}/>
                    </div>

                    <div className="work-methods__item">
                        <img src="../../../../healing-demo/public/2.2.jpg" alt="Фото" className="work-methods__item-img"/>

                        <div className="work-methods__description">
                            <h2 className="work-methods__description-title">
                                Групова терапія
                            </h2>
                            <p>
                                Один із ключових методів, що відрізняє нашу програму від інших, присвячених
                                душпастирству та опіці, полягає у застосуванні групової терапії. У рамках цього підходу
                                всі учасники залучаються до роботи в групах, де вони активно беруть участь у дискусіях
                                та обміні досвідом. Кожна думка є важливою, а життєвий досвід кожного учасника є цінним,
                                оскільки сприяє процесу зцілення душі кожної особи в групі.
                            </p>
                        </div>
                        <Divider sx={{ display: {md: 'none'} }} style={{width:'100%', marginBottom: 20}}/>
                    </div>

                    <div className="work-methods__item">
                        <img src="../../../../healing-demo/public/2.3.jpg" alt="Фото" className="work-methods__item-img"/>

                        <div className="work-methods__description">
                            <h2 className="work-methods__description-title">
                                Партисипативний метод
                            </h2>
                            <p>
                                Партисипативний метод навчання активно залучає учасників у процес вивчення основ
                                програми та практичної роботи з вирішення своїх життєвих проблем. Цей підхід базується
                                на переконанні, що участь і внесок всіх зацікавлених сторін є важливим для досягнення
                                успішних результатів навчання, при цьому кожен зможе отримати необхідну інформацію для
                                впровадження змін в своєму житті та подолання травми.
                            </p>
                        </div>
                        <Divider sx={{ display: {md: 'none'} }} style={{width:'100%', marginBottom: 20}}/>
                    </div>

                    <div className="work-methods__item">
                        <img src="../../../../healing-demo/public/2.1.jpg" alt="Фото" className="work-methods__item-img"/>

                        <div className="work-methods__description">
                            <h2 className="work-methods__description-title">
                                Безпечне середовище
                            </h2>
                            <p>
                                Успішне зцілення нерозривно пов'язане з наявністю довіри. На наших тренінгах ми
                                створюємо безпечне середовище, де відсутні осуд, а замість нього - прийняття та
                                підтримка. Учасники вільно розповідають про свій особистий досвід, що дозволяє їм
                                звільнитися від емоційних обмежень, що допомагає іншим учасникам засвоювати цінні уроки
                                та переосмислити власні переживання.
                            </p>
                        </div>
                        <Divider sx={{ display: {md: 'none'} }} style={{width:'100%', marginBottom: 20}}/>
                    </div>
                </div>
            </div>

            <div className="work-methods-testimony">
                <h1 className="work__methods-testimony__title">Свідчення</h1>
                <VideoComponent cardClassName="work-methods-testimony__video" src="../../../../healing-demo/public/video.mp4"/>
                <Divider sx={{ display: {md: 'none'} }} style={{width:'100%', marginTop: 20}}/>
            </div>
        </div>
    )
};
