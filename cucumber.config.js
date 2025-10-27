module.exports = {
  default: {
    require: [
      'tests/steps/**/*.js'
    ],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    parallel: 1,
    failFast: false,
    retry: 0,
    retryTagFilter: '@retry',
    dryRun: false,
    strict: true,
    tags: 'not @skip'
  }
};
