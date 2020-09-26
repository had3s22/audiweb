import {configureStore} from '@reduxjs/toolkit';
import {audioInfoReducer} from './slices'

export default configureStore({
    reducer: {
        audioInfo: audioInfoReducer,
    },
});
