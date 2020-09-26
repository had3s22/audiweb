import React from "react";
import Layer from "./Layer";

const LayerList = () => {
    const layers_ind = [1, 2, 3, 4, 5, 6, 7]
    const layers = layers_ind.map((ind) => {
        return <Layer key={ind} num={ind}/>
    })
    return (<div className="LayerList">{layers}</div>)
}

export default LayerList;