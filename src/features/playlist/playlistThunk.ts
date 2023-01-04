import { createAsyncThunk } from "@reduxjs/toolkit";
import playlistApi from "api/playlistApi";
import { playlistSchema } from "schema";

const getAllPlaylists = createAsyncThunk(
  "playlist/getAllPlaylist",
  async (_, thunkApi) => {
    try {
      const response = await playlistApi.getAllPlaylists();

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const getPlaylistsNotContainSong = createAsyncThunk(
  "playlist/getPlaylistsNotContainSong",
  async (songId: string, thunkApi) => {
    try {
      const response = await playlistApi.getPlaylistsNotContainSong(songId);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const addSongsToPlaylist = createAsyncThunk(
  "playlist/addSongsToPlaylist",
  async (input: playlistSchema.AddSongsToPlaylistInput, thunkApi) => {
    try {
      const response = await playlistApi.addSongsToPlaylist(input);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const getOnePlaylist = createAsyncThunk(
  "playlist/getOnePlaylist",
  async (id: string, thunkApi) => {
    try {
      const response = await playlistApi.getOnePlaylist(id);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const createPlaylist = createAsyncThunk(
  "playlist/createPlaylist",
  async (name: string, thunkApi) => {
    try {
      const response = await playlistApi.createPlaylist(name);

      if (!response.success || !response.data) {
        return thunkApi.rejectWithValue(response.message);
      }

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const updatePlaylist = createAsyncThunk(
  "playlist/updatePlaylist",
  async (input: playlistSchema.UpdatePlaylistInput, thunkAPI) => {
    try {
      const response = await playlistApi.updatePlaylist(input);

      if (!response.success || !response.data) {
        return thunkAPI.rejectWithValue(response.message);
      }

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const removeSongFromPlaylist = createAsyncThunk(
  "playlist/removeSongFromPlaylist",
  async (input: playlistSchema.RemoveSongFromPlaylistInput, thunkAPI) => {
    try {
      const response = await playlistApi.removeSongFromPlaylist(input);

      if (!response.success || !response.data) {
        return thunkAPI.rejectWithValue(response.message);
      }

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export default {
  getAllPlaylists,
  getOnePlaylist,
  addSongsToPlaylist,
  removeSongFromPlaylist,
  getPlaylistsNotContainSong,
  createPlaylist,
  updatePlaylist,
};
