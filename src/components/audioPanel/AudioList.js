import React from "react";
import Audio from "./Audio";
import useStateHook from "../../hooks/stateHook";

const AudioList = () => {
    const {getAudioList} = useStateHook();
    const audios = getAudioList().map((link) => <Audio key={link} link={link}/>);
    return <div className="AudioList">{audios}</div>
}

export default AudioList;