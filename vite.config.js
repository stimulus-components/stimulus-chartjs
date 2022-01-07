import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') return {}

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'stimulus-chartjs'
      },
      rollupOptions: {
        external: ['chart.js/auto', '@hotwired/stimulus'],
        output: {
          globals: {
            'chart.js/auto': 'Chart',
            '@hotwired/stimulus': 'Stimulus'
          }
        }
      }
    }
  }
}
