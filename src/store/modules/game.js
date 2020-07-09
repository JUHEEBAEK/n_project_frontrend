import {
  searchWithScheduleIdAndQuarter,
  updateGame,
  selectGameList,
  getMultiplexInfo
} from "../../api/game.js";

const state = {
  gameInfo: {},
  gameList: [],
};

const getters = {

};

const mutations = {
  SET_GAME_INFO(state, gameInfo){
    state.gameInfo = gameInfo
  },
  SET_GAME_LIST(state, gameList){
    state.gameList = gameList
  },
};

const actions = {
  async getGameId({commit}, payload) {
    try {
      let response = await searchWithScheduleIdAndQuarter(payload);
      if (response.data){
        if (response.data.length == 0 ){
          commit("SET_GAME_INFO", {})
        }else{
          commit("SET_GAME_INFO", response.data[0])  
        }
        return response.data.insertId
      }else{
        return false;
      } 
    }catch (e) {
        console.log(e);
    }
  },
  async getMultiplexGameInfo({commit}, payload) {
    try {
      let response = await getMultiplexInfo(payload);
      if (response.data){
        if (response.data.length == 0 ){
          commit("SET_GAME_INFO", {})
        }else{
          commit("SET_GAME_INFO", response.data[0])  
        }
        return response.data.insertId
      }else{
        return false;
      } 
    }catch (e) {
        console.log(e);
    }
  },
  async selectGameList({commit}, payload) {
    try {
      let response = await selectGameList(payload);
      if (response.data){
        commit("SET_GAME_LIST", response.data)  
        return response.data.insertId
      }else{
        return false;
      } 
    }catch (e) {
        console.log(e);
    }
  },
  async getGameListWithScheduleId({commit}, payload) {
    try {
      let response = await searchWithScheduleId(payload);
      if (response.data){
        commit("SET_GAME_LIST", response.data[0])  
        return response.data.insertId
      }else{
        return false;
      } 
    }catch (e) {
        console.log(e);
    }
  },
  async updateGameScore({commit}, payload) {
    try {
      let response = await updateGame(payload);
      if (response.data){
        return response.data.insertId
      }else{
        return false;
      } 
    }catch (e) {
        console.log(e);
    }

  }
};


export default {
  state,
  getters,
  mutations,
  actions
};