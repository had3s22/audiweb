import {useState, useEffect} from 'react';

const useStateHook = () => {
    const [layerNum, setLayerNum] = useState(1);
    const [featureNum, setFeatureNum] = useState(1);
    const [mode, setMode] = useState(1);
    const getAudioList = () => {
        const ans = [];
        const base = 'www.base.com';
        if (mode === 1) {
            for (let i = 0; i < 10; i++) {
                ans.push(`${base}/${i}/${mode}/${layerNum}/${featureNum}/`);
            }
        } else if (mode === 1) {
            for (let i = 0; i < 10; i++) {
                ans.push(`${base}/${i}/${mode}/${layerNum}/${featureNum}/`);
            }
        } else if (mode === 2) {
            for (let i = 0; i < 10; i++) {
                ans.push(`${base}/${i}/${mode}/${layerNum}/${featureNum}/`);
            }
        }
        return ans;
    }
    useEffect(() => {
        getAudioList();
    });
    return {layerNum, setLayerNum, featureNum, setFeatureNum, mode, setMode, getAudioList};
}

export default useStateHook;