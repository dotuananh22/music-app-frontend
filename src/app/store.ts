import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import songReducer from "features/song/songSlice";
import singerReducer from "features/singer/singerSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  song: songReducer,
  singer: singerReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
