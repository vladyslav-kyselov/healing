import * as React from 'react';
import {Accordion} from "./Accordion.tsx";

const ACCORDIONS = [
    {
        id: 1,
        title: 'Як записатись на участь у програмі?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        id: 2,
        title: 'Чи можна купити ваші матеріали для ознайомлення?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    },
    {
        id: 3,
        title: 'Чи підійде мені ця програма, якщо я маю освіту психолога?',
        content: (<div>
            Так, ми будемо раді бачити вас серед учасників програми. З часом все більше спеціалістів цікавляться нею,
            серед команди фасилітаторів також є психологи, які використовують на практиці нашу програму і можуть
            засвідчити її дієвість.
            <br/>
            <br/>
            Зі свідчень спеціалістів, які пройшли тренінг, програма чудово поєднує базові знання з психології, але
            поглиблює розуміння травми ґрунтовними біблійними знаннями, що призводить до зцілення на всіх рівнях.
        </div>)
    },
    {
        id: 4,
        title: 'Чи надаєте ви сертифікат?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
    }
];

type Props = {
    className?: string;
}
export const AccordionComponent = ({className}: Props) => {
    return (
        <div>
            {ACCORDIONS.map(({id, title, content}) => (
                <Accordion key={id} id={id} title={title} content={content} className={className}/>
            ))}

        </div>
    );
}
