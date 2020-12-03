import { Controller } from 'stimulus'
import Chart from 'chart.js'

export default class extends Controller {
  static targets = ['canvas']

  connect () {
    const element = this.hasCanvasTarget ? this.canvasTarget : this.element

    this.chart = new Chart(element.getContext('2d'), this.chartData, {
      ...this.options,
      ...this.defaultOptions
    })
  }

  disconnect () {
    this.chart.destroy()
    this.chart = undefined
  }

  get chartData () {
    if (this.data.has('data')) {
      return JSON.parse(this.data.get('data').replace(/'/g, '"'))
    }

    console.warn('[stimulus-chartjs] You need to pass data as JSON to see the chart.')

    return {}
  }

  get options () {
    if (this.data.has('options')) {
      return JSON.parse(this.data.get('options').replace(/'/g, '"'))
    }

    return {}
  }

  get defaultOptions () {
    return {}
  }
}
