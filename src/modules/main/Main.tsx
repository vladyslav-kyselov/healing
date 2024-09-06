import * as React from "react";
import {General} from "./components/general";
import {AboutUs} from "./components/about-us";
import {Programs} from "./components/programs";
import {WorkMethods} from "./components/work-methods";
import {Gallery} from "./components/gallery";


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

export const Main = (props: Props) => {
    const {refs} = props;
    return (
        <main>
            <div ref={refs.generalRef}>
                <General/>
            </div>
            <div ref={refs.aboutUsRef}>
                <AboutUs/>
            </div>
            <div ref={refs.programRef}>
                <Programs/>
            </div>
            <div ref={refs.methodsRef}>
                <WorkMethods/>
            </div>
            <div ref={refs.galleryRef}>
                <Gallery/>
            </div>
        </main>
    );
};
