import {configureStore} from '@reduxjs/toolkit';
import {audioInfoReducer, pageNumberReducer} from './slices'

export default configureStore({
    reducer: {
        audioInfo: audioInfoReducer,
        pageNumber: pageNumberReducer,
    },
});
