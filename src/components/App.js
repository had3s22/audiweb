import React from 'react';
import '../css/app.css';
import '../css/leftPanel.css';
import '../css/archPanel.css';
import '../css/audioPanel.css';
import LeftPanel from "./LeftPanel";
import ArchPanel from "./archPanel/ArchPanel";
import AudioPanel from "./audioPanel/AudioPanel";

function App() {
    return (
        <div className="App">
            <LeftPanel/>
            <ArchPanel/>
            <AudioPanel/>
        </div>
    );
}

export default App;
