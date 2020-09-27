import React from "react";
import Audio from "./Audio";
import {useSelector} from 'react-redux';
import {getAudioList, selectLayerNum, selectFeatureNum} from "../../store/slices";
import { Typography, Divider } from 'antd';
const { Title, Paragraph, Text } = Typography;

const AudioList = () => {
    const list = useSelector(getAudioList);
    const layer_num = useSelector(selectLayerNum);
    const feature_num = useSelector(selectFeatureNum);
    const audios = list.map((link) => <Audio key={link} link={link}/>);
    return <div className="audio-list">
        <Paragraph>Layer: {layer_num} Feature {feature_num}</Paragraph>
        {audios}
    </div>
}

export default AudioList;