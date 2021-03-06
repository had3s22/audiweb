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

export const selectMode = state => state.audioInfo.mode;
export const selectLayerNum = state => state.audioInfo.layerNum;
export const selectFeatureNum = state => state.audioInfo.featureNum;

export const getAudioList = createSelector(
    [selectMode, selectLayerNum, selectFeatureNum],
    (mode, layerNum, featureNum) => {
        const ans = [];
        // const base = 'https://raw.githubusercontent.com/had3s22/audiweb/gh-pages/static/media';
        const base = process.env.PUBLIC_URL + '/assets/audios';
        if (mode === 1) {
            for (let i = 0; i < 1; i++) {
                ans.push(`${base}/${mode}/layer${layerNum}_feature${featureNum - 1}.wav`);
            }
        } else if (mode === 1) {
            for (let i = 0; i < 10; i++) {
                ans.push(`${base}/${i}/${mode}/${layerNum}/${featureNum - 1}/`);
            }
        } else if (mode === 2) {
            for (let i = 0; i < 10; i++) {
                ans.push(`${base}/${i}/${mode}/${layerNum}/${featureNum - 1}/`);
            }
        }
        return ans;
    })

export const audioInfoReducer = AudioInfoSlice.reducer;

export const PageNumberSlice = createSlice({
    name: 'audioInfo',
    initialState: 1,
    reducers: {
        setPageNumber: (state, action) => {
            return action.payload;
        },
    },
});

export const pageNumberReducer = PageNumberSlice.reducer;
export const {setPageNumber} = PageNumberSlice.actions;

export const selectPageNumber = state => state.pageNumber;