import React from "react";
import {useRef} from "react"

const Audio = ({link}) => {
    const ref = useRef("audio_tag")
    return <div className="audio">
        <audio ref={ref} controls={true} className="audio" src={link}>
            <source src={link} type="audio/wav"/>
        </audio>
    </div>


}

export default Audio;