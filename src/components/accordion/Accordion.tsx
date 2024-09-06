import * as React from 'react';
import AccordionMaterialUI from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState} from "react";

type Props = {
    id: number;
    title: string;
    content: string | React.ReactNode;
    className?: string;
};

export const Accordion = ({id, title, content, className}: Props) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const accordionIcon = expanded ? <RemoveIcon/> : <AddIcon/>;
    return (
        <div>
            <AccordionMaterialUI onChange={() => setExpanded(!expanded)} className={className}>
                <AccordionSummary
                    expandIcon={accordionIcon}
                    aria-controls="panel1-content"
                    id={`panel${id}-header`}
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails>
                    {content}
                </AccordionDetails>
            </AccordionMaterialUI>
        </div>
    );
}
