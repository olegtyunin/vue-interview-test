import { createStore, createLogger } from "vuex";

import articles from "./modules/articles";

export default createStore({
  plugins: [...(process.env.NODE_ENV !== "production" ? [createLogger()] : [])],
  modules: {
    articles
  }
});
