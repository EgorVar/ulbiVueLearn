<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
import testMixin from '../mixins/testMixin'
export default {
  name: 'my-button'
}
</script>

<style lang="css" scoped>
  button {
    background-color: #27ae60;
    border: none;
    border-radius: 2px;
    color: #fff;
    font-family: 'Raleway';
    padding: 3px 8px;
  }
</style>
