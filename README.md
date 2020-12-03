# Stimulus Chartjs

[![](https://img.shields.io/npm/dt/stimulus-chartjs.svg)](https://www.npmjs.com/package/stimulus-chartjs)
[![](https://img.shields.io/npm/v/stimulus-chartjs.svg)](https://www.npmjs.com/package/stimulus-chartjs)
[![](https://github.com/stimulus-components/stimulus-chartjs/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-chartjs)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-chartjs.svg)](https://github.com/stimulus-components/stimulus-chartjs)
[![Netlify Status](https://api.netlify.com/api/v1/badges/26d5363d-d699-4558-abb4-2267919dbe59/deploy-status)](https://app.netlify.com/sites/stimulus-chartjs/deploys)

## Getting started

A Stimulus controller to deal with chart.js.

## Installation

```bash
$ yarn add stimulus-chartjs
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import Chart from "stimulus-chartjs"

const application = Application.start()
application.register("chart", Chart)
```

## Usage

### Basic usage

```html
<canvas
  data-controller="chart"
  data-chart-data="{'type': 'line', 'data': { 'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'], 'datasets': [{ 'label': 'My First dataset', 'backgroundColor': 'transparent', 'borderColor': '#3B82F6', 'data': [37, 83, 78, 54, 12, 5, 99] }] } }"
></canvas>
```

If you extend this controller, it could be handy to with it with a `target`:
```html
<div
  data-controller="chart"
  data-chart-data="{'type': 'line', 'data': { 'labels': ['January', 'February', 'March', 'April', 'May', 'June', 'July'], 'datasets': [{ 'label': 'My First dataset', 'backgroundColor': 'transparent', 'borderColor': '#3B82F6', 'data': [37, 83, 78, 54, 12, 5, 99] }] } }"
>
  <canvas data-target="chart.canvas"></canvas>

  <!-- You need to define this action -->
  <button data-action="chart#update">Update me!</button>
</div>
```

**It's much simpler with a framework.**

### With backend framework (optional)

In you controller:
```ruby
class ChartsController < ApplicationController
  def index
    @chart_data = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'transparent',
          borderColor: '#3B82F6',
          data: [37, 83, 78, 54, 12, 5, 99]
        }]
      }
    }

    @chart_options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  end
end
```

In your view:
```html
<canvas
  data-controller="chart"
  data-chart-data="<%= @chart_data.to_json %>"
  data-chart-options="<%= @chart_options.to_json %>"
></canvas>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-chart-data` | `{}` | The data for Chart.js | ❌ |
| `data-chart-options` | `{}` | The options for Chart.js | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus component.

```js
import Chart from "stimulus-chartjs"

export default class extends Chart {
  connect() {
    super.connect()
    console.log("Do what you want here.")

    // The chart.js instance
    this.chart

    // Options from the data attribute.
    this.options

    // Default options for every charts.
    this.defaultOptions
  }

  // Bind an action on this method
  async update () {
    const response = await fetch('https://example.com/chart_data.json')
    const data = await response.json()

    this.chart.data = data
    this.chart.update()
  }

  // You can set default options in this getter for all your charts.
  get defaultOptions () {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    }
  }
}
```

This controller will automatically have access to targets defined in the parent class.

If you override the `connect`, `disconnect` or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## Credits

This controller is inspired [excid3/tailwindcss-stimulus-components](https://github.com/excid3/tailwindcss-stimulus-components/blob/master/src/autosave.js).

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
