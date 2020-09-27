import React from "react";
import {setLayerFeatureNum} from "../../store/slices";
import {useDispatch} from 'react-redux';

const Feature = ({num, layerNum}) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(setLayerFeatureNum({layerNum: layerNum, featureNum: num}))
    }
    return <div className="feature" onClick={handleClick}/>

}

export default Feature;