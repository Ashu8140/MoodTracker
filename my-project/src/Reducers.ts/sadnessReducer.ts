import { SAD_BUTTON_CLAICKED, CLEAR_SAD_BUTTON } from './../actions/mood_action';
import { produce } from 'immer';
import { AnyAction } from 'redux';
import { Moment } from './../store';
export type SadState={
    sadMoment:Moment[];
}
export const initialSadState:SadState={
  sadMoment:[]
}
function sadnessReducer(currentSadState:SadState=initialSadState,action:AnyAction):SadState{
    switch(action.type){
        case SAD_BUTTON_CLAICKED:

    return produce(currentSadState,(draft)=>{
    draft.sadMoment.push(action.payload);

});

    case CLEAR_SAD_BUTTON:
        return {
            sadMoment:[]
        }

        
    
    default:
 return currentSadState;   
}}
export default sadnessReducer;