import React from "react";

export default function useEffectOnUpdate(effectFunction, deps){ //takes in effect function (ie. useToggle) and then dependancies which is what you want react to reference when determining if it needs to run the useEffect again. 
  const firstRender = React.useRef(false) //using useRef so that it does not re-render the page and this is not needed to display

  React.useEffect(() => {
    if(firstRender.current){
      firstRender.current = false
    }else{
      effectFunction()
    }
  }, deps)
}