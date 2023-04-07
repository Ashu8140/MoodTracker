import { HAPPY_BUTTON_CLICKED, CLEAR_HAPPY_BUTTON } from './../actions/mood_action';
import { AnyAction } from 'redux';
import { Moment} from './../store';
import produce from 'immer';

export type HappyState={
    happyMoment:Moment[];
}
export const initialHappyState:HappyState={
     happyMoment:[]

}
function happynessReducer(currentHappyState:HappyState=initialHappyState,action:AnyAction):HappyState{
    switch(action.type){
        case HAPPY_BUTTON_CLICKED:
           
            return produce(currentHappyState,(draft)=>{
                draft.happyMoment.push(action.payload);

            });
            
        case CLEAR_HAPPY_BUTTON:
            return {
                happyMoment:[]
            }
            
    
    default:
 return currentHappyState; 
    
}}
export default happynessReducer;
