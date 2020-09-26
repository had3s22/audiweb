import React from "react";
import AudioList from "./AudioList";
import Modes from "./Modes";

const AudioPanel = () => {
    return <div className="AppItem AudioPanel">
        <AudioList/>
        <Modes/>
    </div>
}

export default AudioPanel;