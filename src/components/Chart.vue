<script>
import { LineChart } from 'vue-chart-3'

export default {
  extends: Line,
  props: ['chartData', 'options'],
  mounted () {
    const a = {
      labels: ['a', 'b'],
      datasets: [
        {
          label: 'c',
          data: [1,2]
        },
        {
          label: 'd',
          data: [3,4]
        },
      ]
    }
    this.renderChart(a, this.options)
  }
}
</script>