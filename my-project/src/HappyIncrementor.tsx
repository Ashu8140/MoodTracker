import React, { FC, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { happyButtonClicked } from "./actions/mood_action";

type HappyIncrementorProps={};
 
const HappyIncrementor:FC<HappyIncrementorProps>=()=>{
  const [quantity,setQuantity]=useState(0);
    const dispetch=useDispatch();

    function increment(){
      dispetch(happyButtonClicked(quantity,new Date()));
    }
    return(
        <div>
         <h1 className="text-xl">You were Happy</h1>
         <input className="border" type="number" value={quantity}
          onChange={(event)=>setQuantity(+event.target.value)} />

         <button onClick={increment} className=" border bg-orange-500 px-2">Yes</button>

        </div>
    );
}
export default HappyIncrementor;