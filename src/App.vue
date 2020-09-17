<template>
  <ArticlesList />
</template>

<script>
import ArticlesList from "./containers/ArticlesList";

export default {
  name: "App",
  components: {
    ArticlesList
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
