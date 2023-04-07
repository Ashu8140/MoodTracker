import {FC,memo, useState} from "react"
import { useDispatch } from "react-redux";
import { sadButtonClicked } from "./actions/mood_action";
type SadIncrementerProps={};

const SadIncrementer:FC<SadIncrementerProps>=(props)=>{
    const [quantity,setQuantity]=useState(0);
    const dispetch= useDispatch();

    function increment(){
      dispetch(sadButtonClicked(quantity,new Date()));
    }
return (
<div>

<h1 className="text-xl" >You were Sad</h1>
<input className="border" type="number" value={quantity}  onChange={(event)=>setQuantity(+event.target.value)} />
 <button onClick={increment} className="bg-green-500 px-2">Yes</button>
</div>
)
}
  SadIncrementer.defaultProps={};

export default memo(SadIncrementer);