const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-chartjs'
    },
    rollupOptions: {
      external: ['stimulus', 'chart.js'],
      output: {
        globals: {
          stimulus: 'Stimulus',
          'chart.js': 'Chart'
        }
      }
    }
  }
}
