import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import songReducer from "features/song/songSlice";
import singerReducer from "features/singer/singerSlice";
import playlistReducer from "features/playlist/playlistSlice";
import favoriteReducer from "features/favorite/favoriteSlice";
import emailReducer from "features/email/emailSlice";
import songAdminReducer from "features/admin/song/songSlice";
import singerAdminReducer from "features/admin/singer/singerSlice";
import userAdminReducer from "features/admin/user/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  song: songReducer,
  singer: singerReducer,
  playlist: playlistReducer,
  favorite: favoriteReducer,
  email: emailReducer,
  adminSong: songAdminReducer,
  adminSinger: singerAdminReducer,
  adminUser: userAdminReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
