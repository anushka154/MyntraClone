import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false, // false: 'PENDING' and true: 'DONE'
        currentlyFetching: false,
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true;
        },
        markFetchingStarted: (state) => {
            state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            state.currentlyFetching = false;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;


/*
import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,       //two values - PENDING(false) or DONE(true)
        currentlyFetching: false,     //check if server is called or not
    },
    reducers: {
        markFetchDone: (state) => {
            return state.fetchDone = true;
        },
        markFetchingStarted: (state) => {
            return state.currentlyFetching = true;
        },
        markFetchingFinished: (state) => {
            return state.currentlyFetching = false;
        }
    }
});


export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
*/
