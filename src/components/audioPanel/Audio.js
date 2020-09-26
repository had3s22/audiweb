import React from "react";
import {useRef} from "react"

const Audio = ({link}) => {
    const ref = useRef("audio_tag")
    return <div className="Audio">
        <audio ref={ref} controls={true} className="Audio" src={link}>
            <source src={link} type="audio/wav"/>
        </audio>
    </div>


}

export default Audio;