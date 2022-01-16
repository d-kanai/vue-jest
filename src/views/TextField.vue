<template>
  <div>
    <label>{{label}}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "TextField",
  props: {
    modelValue: {},
    label: {}
  },
};
</script>
