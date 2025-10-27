module.exports = {
  default: {
    require: [
      'tests/steps/**/*.ts'
    ],
    requireModule: ['tsx/esm'],
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
    dryRun: false,
    strict: true,
    tags: 'not @skip'
  }
};
