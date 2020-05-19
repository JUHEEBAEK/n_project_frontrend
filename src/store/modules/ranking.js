import {
    getGoalRanking,
    getAssistRanking,
    getCleanSheetRanking,
} from "../../api/ranking.js";

const state = {
    rankingData: {
        'GOAL': [
          {
            name: 'Frozen Yogurt',
            score: 159,
          },
          {
            name: 'Ice cream sandwich',
            score: 237,
          },
          {
            name: 'Eclair',
            score: 262,
          },
        ], 
        'ASSIST': [
          {
            name: '탕수육',
            score: 45,
          },
          {
            name: '치킨',
            score: 22,
          },
          {
            name: '피자',
            score: 11,
          },
        ], 
        'CLEAN SHEET': [
          {
            name: '상추',
            score: 11159,
          },
          {
            name: '배추',
            score: 3237,
          },
          {
            name: '김치',
            score: 1262,
          },
        ],
        
    }

}
const mutations = {
    SET_GOAL_RANKING_DATA(state, goalData){
        state['GOAL'] = goalData
    },
    SET_ASSIST_RANKING_DATA(state, assistData){
        state['ASSIST'] = goalData
    },
    SET_CLEAN_SHEET_RANKING_DATA(state, cleanSheetData){
        state['CLEAN_SHEET'] = goalData
    },

}
const actions = {

    async get_goal_ranking(context){
        try {
            const response = await getGoalRanking();
            context.commit("SET_GOAL_RANKING_DATA", response.data);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    async get_assist_ranking(context){
        try {
            const response = await getAssistRanking();
            context.commit("SET_ASSIST_RANKING_DATA", response.data);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },
    async get_clean_sheet_ranking(context){
        try {
            const response = await getCleanSheetRanking();
            context.commit("SET_CLEAN_SHEET_RANKING_DATA", response.data);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    },

}

export default {
    state,
    mutations,
    actions
};