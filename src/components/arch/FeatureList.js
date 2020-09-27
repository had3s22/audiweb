import React from "react";
import Feature from "./Feature";
import _ from 'underscore';

const FeatureList = ({layerNum}) => {
    const feature_ind = _.range(1, 21);
    const features = feature_ind.map((ind) => <Feature key={ind} num={ind} layerNum={layerNum}/>);
    return <div className="feature-list">{features}</div>
}

export default FeatureList;