<template>
  <input type="text" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
  input {
    border: .5px solid #9b59b6;
    padding: 4px 20px;
    font-family: 'Raleway';
    font-size: 16px;
    border-radius: 3px;
    outline: none;
  }
</style>
