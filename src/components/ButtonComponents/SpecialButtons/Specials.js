import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file
import { specials } from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(specials);

  return (
    <div>
      {specials.map(numButton => 
        {return <SpecialButton key = {numButton} numButton = {numButton}/>})}
    </div>
  );
};

export default Specials;