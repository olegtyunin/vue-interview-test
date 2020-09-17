<template>
  <button v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style lang="scss" scoped>
button {
  border: 2px solid black;
  background-color: white;
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
  }

  &:hover {
    background-color: black;
    border-color: transparent;
    color: white;
  }
}
</style>
