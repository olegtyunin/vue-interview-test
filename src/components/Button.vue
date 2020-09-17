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
  font-size: 18px;
  padding: 0.5rem 1rem;
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
