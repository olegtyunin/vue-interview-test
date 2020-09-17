<template>
  <div class="article">
    <p class="article-title">{{ title }}</p>
    <p class="article-description">{{ description }}</p>
    <Button @click="onClickView" class="article-action">View</Button>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Article",
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    onClickView: Function
  }
};
</script>

<style lang="scss" scoped>
.article {
  text-align-last: left;
  padding: 0.5rem 1rem;
  color: black;
}

.article-title {
  font-size: 1.15em;
  font-weight: 700;
}

.article-description {
  color: #757575;
}

.article-action {
  margin-top: 0.5rem;
}
</style>
