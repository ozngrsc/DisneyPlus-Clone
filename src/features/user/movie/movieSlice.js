import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trengind: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectnewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.Original;
export const selectTrending = (state) => state.movie.Trending;

export default movieSlice.reducer;
