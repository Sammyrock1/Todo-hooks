import { useState}  from 'react';


 const useInitialVal = () => {
    const [value,setValue ] = useState("");

     const handleChanges = e => {
       setValue(e.target.value);
   };
    const reset = () => {
      setValue("");
    };

    return [value, handleChanges,reset];
    
  };
  export default useInitialVal;



  

  


    


