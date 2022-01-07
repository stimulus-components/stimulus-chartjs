# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [4.0.0] - 2022-01-07

### Chore

- **Breaking** Upgrading Stimulus to `3.x` and change namespace from `stimulus` to `@hotwired/stimulus`.
- **Breaking** Upgrading Chart.js to `3.x`. See: https://www.chartjs.org/docs/3.7.0/getting-started/v3-migration.html
- Upgrading dependencies
- Upgrading Node to 16.

## [3.0.0] - 2021-05-25

- Moving from Snowpack to Vite
- Using stimulus and Chart.js as external libraries reducing bundle size from `269.37kb` to `0.97kb`.
- Moving to TypeScript
- Upgrading Node to 14.17.0

## [2.1.0] - 2020-12-23

### Changed

- Add `type` value. `line` by default.

### Fixed

- Fix `options` value.

## [2.0.0] - 2020-12-05

### Added

- Support for Stimulus 2.0

### Changed

- **Breaking** Using the new `values` static property.

```diff
- <canvas data-controller="chart" data-chart-data="{'type': 'line', 'data': { 'labels': ['August', 'September', 'October', 'November', 'December'], 'datasets': [{ 'label': 'My Second dataset', 'backgroundColor': 'transparent', 'borderColor': '#EF4444', 'data': [54, 81, 34, 91, 12, 23] }] } }"></canvas>
+ <canvas data-controller="chart" data-chart-data-value='{"type": "line", "data": { "labels": ["August", "September", "October", "November", "December"], "datasets": [{ "label": "My Second dataset", "backgroundColor": "transparent", "borderColor": "#EF4444", "data": [54, 81, 34, 91, 12, 23] }] } }'></canvas>
```

- **Breaking** Using the new syntax for `targets`.

```diff
- <canvas data-target="chart.canvas"></canvas>
+  <canvas data-chart-target="canvas"></canvas>
```

## [1.0.0] - 2020-12-03

### Added

- Adding controller
