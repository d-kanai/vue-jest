<template>
  <div>
    <div class="modal" :class="{'is-active': modalIsActive}">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div>
          <p>modal content</p>
        </div>
      </div>
      <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
    </div>
    <button @click="openModal">modal</button>
    <section class="section">
      <h3 class="subtitle">Dashboard</h3>
      <div v-for="chartData in chartDataList" :key="chartData.label">
        <LineChart v-bind="chartData" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { useDoDListLineChart } from "@/hooks/useDoDListLineChart";
import { defineComponent } from 'vue'
import { computed, ref } from "vue";

Chart.register(...registerables);

export default defineComponent({
  name: "Dashboard",
  components: { LineChart },
  setup() {
    const modalIsActive = ref(false)
    const { chartDataList } = useDoDListLineChart();
    const openModal = () => {
      modalIsActive.value = true
    }
    const closeModal = () => {
      modalIsActive.value = false
    }
    return {
       chartDataList,
       modalIsActive,
       openModal,
       closeModal,
    };
  },
});
</script>

<style>
.modal-content {
  width: 80%;
  height: 80%;
  background: white;
  border-radius: 8px;
}
</style>

