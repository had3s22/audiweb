import React from "react";
import Feature from "./Feature";

const FeatureList = ({layerNum}) => {
    const feature_ind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const features = feature_ind.map((ind) => <Feature key={ind} num={ind} layerNum={layerNum}/>);
    return <div className="FeatureList">{features}</div>
}

export default FeatureList;