import { useState}  from 'react';


 const useInitialVal = (defaultask)=> {
    const [ value,setValue, ] = useState(defaultask);

     const handleChanges = e => {
       setValue(e.target.value);
   };
    const reset = () => {
      setValue("");
    };

    return [value, handleChanges,reset];
    
  };
  export default useInitialVal;



  

  


    


