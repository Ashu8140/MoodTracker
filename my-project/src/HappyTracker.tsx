import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ClearHappyButton } from "./actions/mood_action";
import { happyMomentSelecter } from "./Selectors/mood-selector";

type HappyTrackerProps={};
 
const HappyTracker:FC<HappyTrackerProps>=()=>{
    
    const happyMoments=useSelector(happyMomentSelecter);
    const HappyDispetch=useDispatch();

    function ClearHappy(){
     HappyDispetch(ClearHappyButton());
    }
    
    return(

        <div className="bg-orange-500 py-8" >
            {happyMoments.map((m)=>(  
                <div className="text-xl">
                <>
            happyness Intensity {m.intensity},when:{m.when.toISOString()}
            </>
            </div>
       
       ))} 
       <div>
       <button onClick={ClearHappy} className=" mr-8 border bg-indigo-500 border-black px-2 rounded-sm text-center">Reset</button>
        </div>
        </div>
    )
}
export default HappyTracker;