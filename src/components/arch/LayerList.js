import React from "react";
import Layer from "./Layer";
import _ from 'underscore'

const LayerList = () => {
    const layers_ind = _.range(1, 101);
    const layers = layers_ind.map((ind) => {
        return <div><p>Layer {ind}</p><Layer key={ind} num={ind}/></div>
    })
    return (<div className="layer-list">{layers}</div>)
}

export default LayerList;