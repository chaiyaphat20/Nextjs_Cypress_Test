import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/test-result.xml'
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
