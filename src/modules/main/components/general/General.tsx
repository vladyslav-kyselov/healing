import {Paper, Divider} from "@mui/material";

import './style.scss';

export const General = () => {
    return (
        <div className="main__general">
            <div className="general__info">
                <Paper elevation={0} className="info__description">
                    <h1>Інститут</h1>
                    <h1>Зцілення Травм</h1>
                    <p>
                        Ми є організацією, яка проводить науково-просвітницьку діяльність у галузі ментального здоров'я
                        та здійснює підготовку сертифікованих фасилітаторів. Ми також надаємо психологічну та духовну
                        підтримку різним соціальним групам, включаючи дружин та вдів військовослужбовців, дітей та
                        підлітків, військових і всіх, хто переживає травму війни.
                    </p>
                </Paper>
            </div>
            <div className="general__stats-wrapper">
                <Paper elevation={3} className="general__stats">
                    <div className="general__info-stats">
                        <div className="general__info-item">
                            <h2 className="info-item__title">Волонтерів</h2>
                            <p className="info-item__count">{'>6.300'} </p>
                        </div>
                        <div className="general__info-item">
                            <h2 className="info-item__title">Груп зцілення</h2>
                            <p className="info-item__count">3.266</p>
                        </div>
                        <div className="general__info-item">
                            <h2 className="info-item__title">Учасників</h2>
                            <p className="info-item__count">25.128</p>
                        </div>
                    </div>
                    <div className="info-text">
                        Актуальна інформація за період повномасштабного вторгнення
                    </div>
                    <Divider sx={{ display: {md: 'none'} }} style={{width:'90%'}}/>
                </Paper>
            </div>
        </div>
    )
};
