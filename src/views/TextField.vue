<template>
  <div>
    <label>{{label}}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p class="error">{{error}}</p>
  </div>
</template>
<script>
export default {
  name: "TextField",
  props: {
    modelValue: {},
    label: {},
    error: {}
  },
};
</script>
<style>
.error {
  color: red;
}

</style>
