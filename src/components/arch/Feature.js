import React from "react";
import {selectFeatureNum, selectLayerNum, setLayerFeatureNum} from "../../store/slices";
import {useDispatch, useSelector} from 'react-redux';

const Feature = ({num, layerNum}) => {
    const dispatch = useDispatch();
    const f_num = useSelector(selectFeatureNum);
    const l_num = useSelector(selectLayerNum);
    const color = f_num === num && l_num === layerNum ? 'green' : 'orange';
    const handleClick = (e) => {
        dispatch(setLayerFeatureNum({layerNum: layerNum, featureNum: num}))
    }
    return <div className="feature" style={{backgroundColor: color}} onClick={handleClick}/>

}

export default Feature;