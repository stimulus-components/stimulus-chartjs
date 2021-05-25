import { Controller } from 'stimulus'
import { Chart } from 'chart.js'

export default class extends Controller {
  // @ts-ignore
  element: HTMLCanvasElement
  canvasTarget: HTMLCanvasElement

  chart: Chart
  typeValue: Chart.ChartType
  optionsValue: Chart.ChartOptions
  dataValue: Chart.ChartData

  hasDataValue: boolean
  hasCanvasTarget: boolean

  static targets: Array<string> = ['canvas']
  static values = {
    type: String,
    data: Object,
    options: Object
  }

  connect (): void {
    const element: HTMLCanvasElement = this.hasCanvasTarget ? this.canvasTarget : this.element

    this.chart = new Chart(element.getContext('2d'), {
      type: this.typeValue || 'line',
      data: this.chartData,
      options: this.chartOptions
    })
  }

  disconnect (): void {
    this.chart.destroy()
    this.chart = undefined
  }

  get chartData (): Chart.ChartData {
    if (!this.hasDataValue) {
      console.warn('[stimulus-chartjs] You need to pass data as JSON to see the chart.')
    }

    return this.dataValue
  }

  get chartOptions (): Chart.ChartOptions {
    return {
      ...this.defaultOptions,
      ...this.optionsValue
    }
  }

  get defaultOptions (): Chart.ChartOptions {
    return {}
  }
}
