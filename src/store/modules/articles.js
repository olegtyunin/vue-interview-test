import { fetchArticlesList } from "../../services/api";
import { GET_ARTICLES_LIST } from "../actions";
import { SET_ARTICLES_LIST } from "../mutations";

const initialState = {
  articlesList: []
};

export default {
  state: { ...initialState },
  mutations: {
    [SET_ARTICLES_LIST](state, { payload }) {
      state.articlesList = [...payload];
    }
  },
  actions: {
    async [GET_ARTICLES_LIST]({ commit }) {
      const articlesList = await fetchArticlesList();

      commit(SET_ARTICLES_LIST, {
        payload: articlesList
      });
    }
  }
};
