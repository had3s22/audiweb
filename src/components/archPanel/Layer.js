import React from "react";
import FeatureList from "./FeatureList";

const Layer = ({num}) => {
    return <div className="Layer">
        <FeatureList layerNum={num}/>
    </div>
}

export default Layer;