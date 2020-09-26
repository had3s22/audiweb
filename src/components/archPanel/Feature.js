import React from "react";
import useStateHook from "../../hooks/stateHook";

const Feature = ({num, layerNum}) => {
    const handleClick = (e) => {
        setLayerNum(layerNum);
        setFeatureNum(num);
        console.log(layerNum,num);
    }
    const {setLayerNum, setFeatureNum} = useStateHook();
    return <div className="Feature" onClick={handleClick}>{num}/{layerNum}</div>
}

export default Feature;