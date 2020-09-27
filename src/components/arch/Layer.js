import React from "react";
import FeatureList from "./FeatureList";

const Layer = ({num}) => {
    return <div className="layer">
        <FeatureList layerNum={num}/>
    </div>
}

export default Layer;