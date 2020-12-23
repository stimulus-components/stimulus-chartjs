import { Controller } from 'stimulus'
import Chart from 'chart.js'

export default class extends Controller {
  static targets = ['canvas']
  static values = {
    type: String,
    data: Object,
    options: Object
  }

  connect () {
    const element = this.hasCanvasTarget ? this.canvasTarget : this.element

    this.chart = new Chart(element.getContext('2d'), {
      type: this.typeValue || 'line',
      data: this.chartData,
      options: {
        ...this.defaultOptions,
        ...this.optionsValue
      }
    })
  }

  disconnect () {
    this.chart.destroy()
    this.chart = undefined
  }

  get chartData () {
    if (!this.hasDataValue) {
      console.warn('[stimulus-chartjs] You need to pass data as JSON to see the chart.')
    }

    return this.dataValue
  }

  get defaultOptions () {
    return {}
  }
}
