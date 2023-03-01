import { useState, useEffect } from "react";


const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {

        if(forwards){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 10000000000000);
  
      return () => clearInterval(interval);
    }, []);
  
    return counter;
}

export default useCounter;