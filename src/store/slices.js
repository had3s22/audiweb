import {createSlice} from '@reduxjs/toolkit';
import {createSelector} from 'reselect';

export const AudioInfoSlice = createSlice({
    name: 'audioInfo',
    initialState: {
        layerNum: 1,
        featureNum: 1,
        mode: 1
    },
    reducers: {
        setLayerFeatureNum: (state, action) => {
            state.layerNum = action.payload.layerNum;
            state.featureNum = action.payload.featureNum;
        },
        setMode: (state, action) => {
            state.model = action.payload.mode;
        }
    },
});

export const {setLayerFeatureNum, setMode} = AudioInfoSlice.actions;

const selectMode = state => state.audioInfo.mode;
const selectLayerNum = state => state.audioInfo.layerNum;
const selectFeatureNum = state => state.audioInfo.featureNum;

export const getAudioList = createSelector(
    [selectMode, selectLayerNum, selectFeatureNum],
    (mode, layerNum, featureNum) => {
        const ans = [];
        const base = 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media';
        if (mode === 1) {
            for (let i = 0; i < 1; i++) {
                ans.push(`${base}/${mode}/layer${layerNum}_feature${featureNum}.wav`);
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
    })

export const audioInfoReducer = AudioInfoSlice.reducer;
