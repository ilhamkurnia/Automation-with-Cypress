const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1ue5sy',
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});

// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:8080',
//   },
// })


require('@applitools/eyes-cypress')(module);
