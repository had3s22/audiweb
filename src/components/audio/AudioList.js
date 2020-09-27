import React from "react";
import Audio from "./Audio";
import {useSelector} from 'react-redux';
import {getAudioList} from "../../store/slices";

const AudioList = () => {
    const list = useSelector(getAudioList);
    const audios = list.map((link) => <Audio key={link} link={link}/>);
    return <div className="audio-list">{audios}</div>
}

export default AudioList;