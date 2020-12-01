<script>
import { Line } from 'vue-chartjs'

export default {
  name: 'LineChart',
  extends: Line,
  props: ['chartData', 'options'],
  mounted () {
    //var chart = this.renderChart(this.chartData, this.options)
    var chart = new Chart(this.$refs, {type: 'line', data: this.chartData, options: this.options})
    chart.draw()
    if(chart.tooltip._active == undefined)
      chart.tooltip._active = []
    var activeElements = chart.tooltip._active
    activeElements.push(chart.getDatasetMeta(0).data[13])
    chart.tooltip._active = activeElements
    chart.tooltip.update(true)
    chart.draw()
  }
}
</script>