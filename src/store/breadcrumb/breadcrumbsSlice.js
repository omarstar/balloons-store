import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    crumbs: []
}

const breadcrumbsSlice = createSlice({
    name: 'breadcrumbs',
    initialState,
    reducers: {
        updateBreadcrumbs(state, action) {
            state.crumbs = action.payload;
        }
    }
})

export const breadcrumbsActions = breadcrumbsSlice.actions;
export default breadcrumbsSlice;