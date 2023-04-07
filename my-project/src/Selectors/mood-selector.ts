import { State } from './../store';

export function happyMomentSelecter(state:State){
   return state.happy.happyMoment;
}
export function sadMomentSelecter(state:State){
   return state.sad.sadMoment;
}
