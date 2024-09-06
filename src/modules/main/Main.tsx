import * as React from "react";
import {General} from "./components/general";
import {AboutUs} from "./components/about-us";
import {Programs} from "./components/programs";
import {WorkMethods} from "./components/work-methods";
import {Gallery} from "./components/gallery";


export const Main = () => {
    return (
        <main>
            <div id="general">
                <General/>
            </div>
            <div id="aboutUs">
                <AboutUs/>
            </div>
            <div id="programs">
                <Programs/>
            </div>
            <div id="methods">
                <WorkMethods/>
            </div>
            <div id="gallery">
                <Gallery/>
            </div>
        </main>
    );
};
