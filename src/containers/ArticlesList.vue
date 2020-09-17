<template>
  <div class="articles-list">
    <Article
      v-for="article in articlesList"
      :key="article.id"
      :title="article.title"
      :description="article.body"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Article from "../components/Article";
import { GET_ARTICLES_LIST } from "../store/actions";

export default {
  name: "ArticlesList",
  components: {
    Article
  },
  created() {
    this.getArticlesList();
  },
  computed: {
    ...mapState({
      articlesList: ({ articles }) => articles.articlesList
    })
  },
  methods: {
    ...mapActions({ getArticlesList: GET_ARTICLES_LIST })
  }
};
</script>

<style lang="scss" scoped>
.articles-list {
  max-width: 600px;
  margin: 2rem auto;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
