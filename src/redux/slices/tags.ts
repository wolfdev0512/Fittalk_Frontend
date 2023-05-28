import { createSlice } from "@reduxjs/toolkit";
// type
import { TagsType } from "types/model/category/interface";
import { Tag } from "contentful";
// ----------------------------------------------------------------------

type TagState = {
  taglist: Array<Tag>;
};

const initialState: TagState = {
  taglist: [],
};

const slice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setTags(state, action: { payload: TagsType }) {
      state.taglist = action.payload.items;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { setTags } = slice.actions;
