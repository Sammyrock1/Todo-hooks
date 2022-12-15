import React, {useState} from 'react';


function useToggle(InitialVal = false){
    //call usestate ,"reserve piece of state"
    const[state,setState] = useState(InitialVal);
    const toggle = () => {
        setState(!state);
    }
    //return a piece of state and function to toggle it;
    return [state,toggle ]

}
export default useToggle;
