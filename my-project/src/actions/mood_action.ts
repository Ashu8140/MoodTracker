import { ActionCreator } from './index';
import { Moment } from './../store';
export const HAPPY_BUTTON_CLICKED="HAPPY_BUTTON_CLICKED";
export const SAD_BUTTON_CLAICKED="SAD_BUTTON_CLAICKED";
export const CLEAR_HAPPY_BUTTON="CLEAR_HAPPY_BUTTON";       
export const CLEAR_SAD_BUTTON="CLEAR_SAD_BUTTON";

export const happyButtonClicked:ActionCreator<Moment>=(intensity:number,when:Date)=>({
    type: "HAPPY_BUTTON_CLICKED",
    payload:{intensity,when}
    });


export const sadButtonClicked:ActionCreator<Moment>=(intensity:number,when:Date)=>({
    type: "SAD_BUTTON_CLAICKED",
    payload:{intensity,when}
});


export const ClearHappyButton=()=>({
    type: "CLEAR_HAPPY_BUTTON",
});

export const ClearSdButton=()=>({
    type: "CLEAR_SAD_BUTTON",
});



    
