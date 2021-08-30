export const state = () => ({
  unitTeamList: [],
  unitTeamInfo: {}
});

export const getters = {
  unitTeamList(state) {
    return state.unitTeamList;
  },
  unitTeamInfo(state) {
    return state.unitTeamInfo;
  }
};

const mutations = {
  SET_UNIT_TEAM_LIST(state, list) {
    state.unitTeamList = list;
  },
  SET_UNIT_TEAM_INFO(state, info) {
    state.unitTeamInfo = info;
  }
};
const actions = {
  async getUnitTeamList({ commit, dispatch, rootGetters }) {
    const apiClient = rootGetters["global/apiClient"];

    const { success, response, error } = await apiClient.team.getUnitTeamList();
    if (success) {
      commit("SET_UNIT_TEAM_LIST", response.data);
    } else if (error) {
      dispatch("apiErrorHandler", { error }, { root: true });
    }
  },
  async updateUnitTeam({ dispatch, rootGetters }, formData) {
    const apiClient = rootGetters["global/apiClient"];

    const { success, error } = await apiClient.team.updateUnitTeam(formData);
    if (success) {
      dispatch("apiSuccessHandler", { message: "성공적으로 유닛 팀이 수정되었습니다." }, { root: true });

      // TODO: 수정할 때 해주기
      // dispatch("getCoachList");

      return true;
    } else if (error) {
      dispatch("apiErrorHandler", { error }, { root: true });
      return false;
    }
  },
  async deleteUnitTeam({ dispatch, rootGetters }, formData) {
    const apiClient = rootGetters["global/apiClient"];

    const { success, error } = await apiClient.team.deleteUnitTeam(formData);
    if (success) {
      dispatch("apiSuccessHandler", { message: "성공적으로 유닛팀이 삭제되었습니다." }, { root: true });
      dispatch("getUnitTeamList");

      return true;
    } else if (error) {
      dispatch("apiErrorHandler", { error }, { root: true });
      return false;
    }
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};