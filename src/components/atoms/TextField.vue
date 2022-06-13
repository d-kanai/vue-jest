<template>
  <div class="field">
    <!-- <label>{{ label }}</label> -->
    <div class="control">
      <input
        :id="'input-' + label"
        class="input"
        :value="modelValue"
        :placeholder="label"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextField",
  props: {
    modelValue: {},
    label: {},
    error: {},
  },
});
</script>
<style>
.error {
  color: red;
}
</style>
