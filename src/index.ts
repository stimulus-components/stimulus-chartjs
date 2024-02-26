import { Controller } from "@hotwired/stimulus"
import { Chart, ChartType, ChartOptions, ChartData } from "chart.js/auto"

export default class Chartjs extends Controller<HTMLCanvasElement> {
  canvasTarget: HTMLCanvasElement

  chart: Chart
  typeValue: ChartType
  optionsValue: ChartOptions
  dataValue: ChartData

  hasDataValue: boolean
  hasCanvasTarget: boolean

  static targets = ["canvas"]
  static values = {
    type: {
      type: String,
      default: "line",
    },
    data: Object,
    options: Object,
  }

  connect(): void {
    const element = this.hasCanvasTarget ? this.canvasTarget : this.element

    this.chart = new Chart(element.getContext("2d"), {
      type: this.typeValue,
      data: this.chartData,
      options: this.chartOptions,
    })
  }

  disconnect(): void {
    this.chart.destroy()
    this.chart = undefined
  }

  get chartData(): ChartData {
    if (!this.hasDataValue) {
      console.warn("[@stimulus-components/chartjs] You need to pass data as JSON to see the chart.")
    }

    return this.dataValue
  }

  get chartOptions(): ChartOptions {
    return {
      ...this.defaultOptions,
      ...this.optionsValue,
    }
  }

  get defaultOptions(): ChartOptions {
    return {}
  }
}
