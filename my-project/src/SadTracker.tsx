import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClearSdButton } from "./actions/mood_action";
import { sadMomentSelecter } from "./Selectors/mood-selector";

type SadTrackerProps={};
 
const SadTracker:FC<SadTrackerProps>=()=>{
    const sadMoments=useSelector(sadMomentSelecter);
    
   const sadDispetch=useDispatch();
    function SadClear(){
    sadDispetch(ClearSdButton())
    }
   
    return(
        <div className="bg-green-500 py-8 mt-2" >
        {sadMoments.map((m)=>(    
    <div className="text-xl">
        <>
        sadness Intensity: {m.intensity}, when:{m.when.toISOString()}
        </>
    </div>
     ))} 
     <div>
       <button onClick={SadClear} className=" mr-8 border bg-indigo-500 border-black px-2 rounded-sm text-center">Reset</button>
        </div>
    </div>
    )
}
export default SadTracker;